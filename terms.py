# -*- coding: utf-8 -*-

import logging
logger = logging.getLogger(__name__)

import models
import utils


class Error(Exception):
  pass


def _get_all():
  return [terms_item.msg for terms_item in models.TermModel.QueryAll()]

def _get_by_id(id):
  result = models.TermModel.Get(id)
  return None if result is None else result.msg


# The Terms RESTful service.
#
# Supports creating a new term, fetching all terms or fetching a specific term by ID.
# Works with the rest_handler.RestProtoJsonRoute adapter.
class TermHandler(object):
  def get(self, id=None):
    return _get_by_id(id) if id else _get_all()

  def create(self, msg):
    msg.createdTimestamp = utils.timestamp_utcnow()
    term_model = models.TermModel(msg=msg)
    term_model.put()
    msg.id =  term_model.key.id()
    return msg

  def set(self, msg, id):
    term_model = models.TermModel.Get(id)
    term_model.msg.name = msg.name
    term_model.msg.definition = msg.definition
    term_model.put()
    return term_model.msg

term_handler = TermHandler()
