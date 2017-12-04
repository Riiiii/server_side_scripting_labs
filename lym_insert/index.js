var mongo = require('mongodb').MongoClient

var fName = process.argv[2]
var lName = process.argv[3]

var url = 'mongodb://localhost:27017/learnyoumongo'

var doc = {
  firstName: fName
, lastName: lName
}

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})