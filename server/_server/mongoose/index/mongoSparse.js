
// Sparse indexes only contain entries for documents that have the indexed field,
// even if the index field contains a null value.
// The index skips over any document that is missing the indexed field.
// The index is “sparse” because it does not include all documents of a collection.
//
// By contrast, non-sparse indexes contain all documents in a collection,
// storing null values for those documents that do not contain the indexed field.

    To create a sparse index, use the db.collection.createIndex()
method with the sparse option set to true. For example, the following operation in the mongo shell creates a sparse index on the xmpp_id field of the addresses collection:

    db.addresses.createIndex( { "xmpp_id": 1 }, { sparse: true } )

NOTE
//Do not confuse sparse indexes in MongoDB with block-level indexes in other databases. Think of them as dense indexes with a specific filter.
  //  Behavior

//sparse Index and Incomplete Results

    If a sparse index would result in an incomplete result set for queries and sort operations, MongoDB will not use that index unless a hint() explicitly specifies the index.

    For example, the query { x: { $exists: false } } will not use a sparse index on the x field unless explicitly hinted. See Sparse Index On A Collection Cannot Return Complete Results for an example that details the behavior.

    Indexes that are sparse by Default
2dsphere (version 2), 2d, geoHaystack, and text indexes are always sparse.

    sparse Compound Indexes
Sparse compound indexes that only contain ascending/descending index keys will index a document as long as the document contains at least one of the keys.

    For sparse compound indexes that contain a geospatial key (i.e. 2dsphere, 2d, or geoHaystack index keys) along with ascending/descending index key(s), only the existence of the geospatial field(s) in a document determine whether the index references the document.

    For sparse compound indexes that contain text index keys along with ascending/descending index keys, only the existence of the text index field(s) determine whether the index references a document.

    sparse and unique Properties
An index that is both sparse and unique prevents collection from having documents with duplicate values for a field but allows multiple documents that omit the key.

    Examples

Create a Sparse Index On A Collection
Consider a collection scores that contains the following documents:

{ "_id" : ObjectId("523b6e32fb408eea0eec2647"), "userid" : "newbie" }
{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }
{ "_id" : ObjectId("523b6e6ffb408eea0eec2649"), "userid" : "nina", "score" : 90 }
The collection has a sparse index on the field score:

    db.scores.createIndex( { score: 1 } , { sparse: true } )
Then,
    the following query on the scores collection uses the
sparse index
to
return the documents that
have the score field less than ($lt) 90:


db.scores.find( { score: { $lt: 90 } } )
Because the document for the userid "newbie"
does not contain the score field
and thus does not meet the query criteria,
    the query can use the sparse index to return the results:


{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }


Sparse Index On A Collection Cannot Return Complete Results
Consider a collection scores that contains the following documents:

{ "_id" : ObjectId("523b6e32fb408eea0eec2647"), "userid" : "newbie" }
{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }
{ "_id" : ObjectId("523b6e6ffb408eea0eec2649"), "userid" : "nina", "score" : 90 }
The collection has a sparse index on the field score:

    db.scores.createIndex( { score: 1 } , { sparse: true } )
Because the document for the userid "newbie" does not contain the score field,
    the sparse index does not contain an entry for that document.

    Consider the following query to return all documents in the scores collection, sorted by the score field:

    db.scores.find().sort( { score: -1 } )
Even though the sort is by the indexed field, MongoDB will not select the sparse index to fulfill the query in order to return complete results:

{ "_id" : ObjectId("523b6e6ffb408eea0eec2649"), "userid" : "nina", "score" : 90 }
{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }
{ "_id" : ObjectId("523b6e32fb408eea0eec2647"), "userid" : "newbie" }
To use the sparse index, explicitly specify the index with hint():

db.scores.find().sort( { score: -1 } ).hint( { score: 1 } )
The use of the index results in the return of only those documents with the score field:

{ "_id" : ObjectId("523b6e6ffb408eea0eec2649"), "userid" : "nina", "score" : 90 }
{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }
SEE ALSO
explain() and Analyze Query Performance
Sparse Index with Unique Constraint
Consider a collection scores that contains the following documents:

{ "_id" : ObjectId("523b6e32fb408eea0eec2647"), "userid" : "newbie" }
{ "_id" : ObjectId("523b6e61fb408eea0eec2648"), "userid" : "abby", "score" : 82 }
{ "_id" : ObjectId("523b6e6ffb408eea0eec2649"), "userid" : "nina", "score" : 90 }

You could create an index with a
    unique constraint
and
sparse filter on the score field
using the following operation:

    db.scores.createIndex( { score: 1 } , { sparse: true, unique: true } )

//This index would permit the insertion of documents that had unique values
// for the score field or did not include a score field.





// Consider the following insert operation:

    db.scores.insert( { "userid": "AAAAAAA", "score": 43 } )
db.scores.insert( { "userid": "BBBBBBB", "score": 34 } )
db.scores.insert( { "userid": "CCCCCCC" } )
db.scores.insert( { "userid": "DDDDDDD" } )

//However, the index would not permit the addition of the following documents
// since documents already exists with score value of 82 and 90:

db.scores.insert( { "userid": "AAAAAAA", "score": 82 } )
db.scores.insert( { "userid": "BBBBBBB", "score": 90 } )