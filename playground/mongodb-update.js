// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // <== Destructuring

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB sever');

  //http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
  //http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5978ebaeb72e52f82d759c2f')
  }, {
    $set: {
      name: 'Sedim' //https://docs.mongodb.com/manual/reference/operator/update/
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }). then ((result) => {
    console.log(result);
  });





// //http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('597a3ae8d472d3f2d99fddd3')
// }, {
//   $set: {
//     completed: true //https://docs.mongodb.com/manual/reference/operator/update/
//   }
// }, {
//   returnOriginal: false
// }). then ((result) => {
//   console.log(result);
// });

// Results:
// Connected to MongoDB sever
// { lastErrorObject: { updatedExisting: true, n: 1 },
//   value:
//    { _id: 597a3ae8d472d3f2d99fddd3,
//      text: 'Something to do',
//      completed: true },
//   ok: 1 }




  //db.close(); // Temporarly disabled for the above to work
});
