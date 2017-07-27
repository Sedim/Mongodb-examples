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








  // db.collection('Users').find({name: 'Sedim'}).toArray().then(
  //   (docs) => {
  //   console.log('deleted');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });


  // db.collection('Users').findOneAndDelete(newObj).then(
  //   (result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });
});
