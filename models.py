# -*- coding: utf-8 -*-
#
# Our datastore models are specified in python by subclassing "ndb.Model".  For
# a RESTful API, our data model matches the JSON request/response objects
# nearly 1 for 1.  As such, we'll define the message model thats transferred
# between the client and server as our canonical model and then define the
# datastore model in terms of it.
#
# Our messages are defined as protocol messages via the protorpc library.
# This library is available on AppEngine.
# The NDB model provides a nice way to map a ProtoRPC message onto a data model
# field via the msgprop.MessageProperty mapping.  We mark the "name" and
# "creatorEmail" as indexed so we can query on them.
#
# The "id" field is, surprisingly, not marked as required.  This is
# because, when a new Term is being created, the client doesn't have an
# "id" for it yet.  Our backend will add the "id", but the message in
# transit will be missing it.  "createdTimestamp" is a UTC timestamp value
# that is set by our server code the first time a term is being inserted
# into the datastore.


from protorpc import messages

import google.appengine.ext.ndb.msgprop
ndb = google.appengine.ext.ndb


package = "com.appspot.ng-codelab"


class Term(messages.Message):
  id  = messages.IntegerField(1, required=False)
  name  = messages.StringField(2, required=True)
  definition  = messages.StringField(3, required=False)
  creatorEmail  = messages.StringField(4, required=False)
  createdTimestamp  = messages.IntegerField(5, required=False)


class TermModel(ndb.Model):
  msg = ndb.msgprop.MessageProperty(
      Term,
      indexed_fields=[
          "name",
          "creatorEmail",
          ]
      )

  @classmethod
  def Get(cls, id):
    result = ndb.Key(cls, int(id)).get()
    result.msg.id = result.key.id()
    return result

  @classmethod
  def QueryAll(cls, limit=20):
    results = cls.query().fetch(limit)
    for result in results:
      result.msg.id = result.key.id()
    return results


class Comment(messages.Message):
  termId  = messages.IntegerField(1, required=False)
  text  = messages.StringField(2, required=True)
  definition  = messages.StringField(3, required=False)
  creatorEmail  = messages.StringField(4, required=False)
  createdTimestamp  = messages.IntegerField(5, required=False)


class CommentModel(ndb.Model):
  msg = ndb.msgprop.MessageProperty(
      Comment,
      indexed_fields=[
          "termId",
          ]
      )
  @classmethod
  def QueryByTermId(cls, termId, limit=100):
    termId = int(termId)
    results = cls.query(cls.msg.termId == termId).order(cls.msg.termId).fetch(limit)
    return results

