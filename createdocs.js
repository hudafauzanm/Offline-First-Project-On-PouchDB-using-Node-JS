//Requiring the package
var PouchDB = require('PouchDB');

//Creating the database object
var db = new PouchDB('my_database');
var remoteDB = new PouchDB('http://localhost:3300/my_database')

//Preparing the document
doc = {
   _id : '002',
   username: 'Hudaaa',
   password: '1234567'
   }
//Inserting Document
db.put(doc, function(err, response) {
   if (err) {
      return console.log(err);
   } else {
      console.log("Document created Successfully");
   }
});