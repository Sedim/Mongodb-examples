//Include the Mongo client to connect to mongodb:
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // <== Destructuring



//connect/create to  a new or exsisting database called todoApp
// (no need to create):
MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    // return to stop execution but print message first:
    return console.log('Unable to connect to mongoDB server');
  }
  // Else confirm we connected:
  console.log('Connected to MongoDB sever');

// // create or add to a 'Todos' collection (aka Table)
// db.collection('Todos').insertOne({
//   text: 'Something to do',// Add a document( Aka record)
//   completed: false
// }, (err, result) =>{ //And returns err an result to our function
//   if (err){
//     // Display the err and stop exec in this function
//     return console.log( 'Unable to insert todo', err)
//   }
//   //Else display the result of the document we added
//   // the .ops will store all the documents we jsut added
//   console.log (JSON.stringify(result.ops, undefined, 2));
//   console.log(result.ops[0]._id);
//   console.log(result.ops[0]._id.getTimestamp());
// });

db.collection('Users').insertOne({
  name: 'Sedim',
  age: 57,
  location: 'Fair haven'
}, (err, result) => {
  if (err) {
    return console.log('Unable to insert user', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});

  db.close();
});
