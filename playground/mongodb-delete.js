// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // <== Destructuring

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB sever');


// //Delete Many
// db.collection('Todos').deleteMany({text: 'Do something'}).then (
//   (result) => {
//     console.log (`Results:::: ${result}`);
//   }, (err) => {
//     console.log ('Could not delete record');
// });
//
// //delete One
// db.collection('Todos').deleteOne({text: 'Do something'}).then (
//   (result) => {
//     console.log (`Results:::: ${result}`);
//   }, (err) => {
//     console.log ('Could not delete record');
// });


// findOneAndDelete
// This one returns the document too
db.collection('Todos').findOneAndDelete({completed: false}).then (
  (result) => {
    console.log (result);
  });























  //db.close(); // Temporarly disabled for the above to work
});
