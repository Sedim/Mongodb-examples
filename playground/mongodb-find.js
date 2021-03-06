// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // <== Destructuring

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to MongoDB sever');

  //Find all documents in the Todos collection (returns a pointer)
  // tha has methods. Then we use .toArray which returns a promise.
  //Now we can use '.then((docs) => ...' which is used in promises.
  //db.collection('Todos').find().toArray().then( // <== find all

  // db.collection('Users').find({name: 'Sedim'}).toArray().then(
  //   (docs) => {
  //   console.log('deleted');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectId('59776048d472d3f2d99f7990')})
  //   .toArray().then(
  //   (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find({
    _id: new ObjectId('59776048d472d3f2d99f7990')}).toArray( function(err,res){
      console.log(res);
    });

    db.collection('Todos').find({_id: new ObjectId('5978ebda432694f83921a533')}).toArray().then (
      (result) => {
        console.log(result);
      }, (err) => {
          console.log('Unable to fetch todos', err);
      });






// count the number of documents
  // db.collection('Todos').find().count().then(
  //   (count) => {
  //   console.log (`Todos count: ${count}`)
  //   },(err) => {
  //       console.log('Unable to fetch todos', err);
  //   });





  //db.close(); // Temporarly disabled for the above to work
});
