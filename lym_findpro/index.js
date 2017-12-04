var mongo = require('mongodb').MongoClient
var a = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  var p = db.collection('parrots')
  p.find({
    age: {
      $gt: +a
    }
  }, {
    name: 1
  , age: 1
  , _id: 0
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})