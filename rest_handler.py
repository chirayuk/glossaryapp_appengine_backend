# -*- coding: utf-8 -*-

import webapp2
from protorpc import protojson


class Error(Exception): pass


def RestProtoJsonRoute(template, handler, request_type, methods=None, **kwargs):
  # methods is the same parameter that webapp2.Route accepts.
  if methods is None: methods = []

  # We will add the REST HTTP verbs based on the methods implemented by the
  # provided handler.  
  if hasattr(handler, "create"): methods.append("POST")
  if hasattr(handler, "delete"):
    raise NotImplementedError("rest_handler.RestProtoJsonRoute: DELETE not implemented.")
  if hasattr(handler, "get"):    methods.append("GET")
  if hasattr(handler, "set"):    methods.append("PUT")

  # A RESTful service must support at least one verb.
  if not methods:
    raise Error("You must have at least one method on the handler.")

  def decode_proto(data):
    return protojson.decode_message(request_type, data)

  def encode_proto(msg):
    if msg is None:
      return ''
    elif isinstance(msg, list):
      # A list of ProtoRPC messages needs to be serialized into a JSON list by
      # serializing each individual message.
      msg_list = msg
      csv = ", ".join(protojson.encode_message(msg) for msg in msg_list)
      return "[" + csv + "]"
    else:
      return protojson.encode_message(msg)

  # This is a webapp2 RequestHandler that proxies HTTP method invocations to
  # the right method on the RESTful handler and handling
  # serializing/deserializing the ProtoRPC messages.
  class RestJsonHandlerAdapter(webapp2.RequestHandler):
    def get(self, **params):
      # Get requests have no HTTP message body to be parsed.
      result = handler.get(**params)
      self.response.write(encode_proto(result))

    def put(self, **params):
      data = decode_proto(self.request.body) if self.request.body else None
      result = handler.set(data, **params)
      self.response.write(encode_proto(result))

    def post(self, **params):
      data = decode_proto(self.request.body) if self.request.body else None
      result = handler.create(data, **params)
      self.response.write(encode_proto(result))

  return webapp2.Route(template,
                       handler=RestJsonHandlerAdapter,
                       methods=methods,
                       **kwargs)
