# -*- coding: utf-8 -*-

"""RESTful API backend for the glossaryapp AngularJS codelab.

Exposes two RESTful services for Terms and Comments.

GET  /api/terms               - Fetch all terms
POST /api/terms               - Create a new term
GET /api/terms/<ID>           - Get a specific term
GET /api/terms/<ID>/comments  - Fetch all comments for the term
POST /api/terms/<ID>/comments - Add a new comments for the term
"""

import webapp2

import config
import rest_handler

import models
import comments
import terms


# Our WSGI app is a webapp2 WSGIApplication.
# We use our custom RestProtoJsonRoute adapter to allow us to write our REST
# handlers at a high level -  dealing only with typed input messages and
# returning a typed response message without having to worry about
# serializing/deserializing JSON.

def get_wsgi_app():
  RestProtoJsonRoute = rest_handler.RestProtoJsonRoute
  routes = [
      RestProtoJsonRoute('/api/terms/<id:\d+>',
                         name='termsById',
                         request_type=models.Term,
                         handler=terms.term_handler,
                         defaults=dict(id=None)),
      RestProtoJsonRoute('/api/terms',
                         name='terms',
                         request_type=models.Term,
                         handler=terms.term_handler),
      RestProtoJsonRoute('/api/terms/<termId:\d+>/comments',
                         name='commentsByTermId',
                         request_type=models.Comment,
                         handler=comments.comment_handler,
                         defaults=dict(termId=None)),
      ]
  wsgi_app = webapp2.WSGIApplication(routes, debug=config.debug)
  return wsgi_app


# This is our main WSGI application.  We only handle the /api/ URLs.
wsgi_app = get_wsgi_app()
