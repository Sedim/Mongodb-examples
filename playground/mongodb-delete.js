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


  var myname = 'Sedim';
  var nameObj = {
    name: myname
  };
  // myString = JSON.stringify(nameObj, undefined, 2);
  // console.log('nameObj Stringified =',myString);
  // console.log('nameObj = ',nameObj);
  // var newObj = JSON.parse(myString);
  // console.log ('newOBJ= ', newObj);
  // console.log('NewObj Stringified= ', JSON.stringify(newObj, undefined, 2));
//findOneAndDelete**************
  var collection = db.collection('Users');
  collection.findOne(nameObj).then(
    (result) => {
    console.log(JSON.stringify(result, undefined, 2));
    console.log(result._id);
    collection.findOneAndDelete({_id:  ObjectId(result._id)}).then (
      (result) => {
        console.log(result);
      }, (err) => {
          console.log('Unable to fetch todos', err);
      });
  }, (err) => {
      console.log('Unable to fetch todos', err);
  });



  //db.close(); // Temporarly disabled for the above to work
});
