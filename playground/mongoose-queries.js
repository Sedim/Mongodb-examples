const {ObjectID} = require('mongodb');// This loads the ObjectID directly from mongodb

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


//var id = '597fc9e76f81d20d84fc5368';

var id = "598783340a509ae7a16fe433";

if (!ObjectID.isValid(id)) {
  console.log('ID Not Valid');
}

// //The following will return an Array
// Todo.find({
//   _id: id
// }).then ((todoResults) => {
//   console.log('Todo Using find= ', todoResults)
// });
//
// //The following will return the string (Which is easier to handle)
// Todo.findOne({
//   _id: id
// }).then ((todoResult) => {
//   console.log('Todo using findOne= ', todoResult)
// });

// Todo.findById(id).then ((todoResult) => {
//   if (!todoResult){
//     return console.log('Id not found');// If id not found
//   }
//   console.log('Todo by id = ', todoResult)
// }).catch((e) => console.log(e));



User.findById(id).then ((userResult) => {
  if (!userResult){
    return console.log('Id not found in User collection');// If id not found
  }
  console.log('User by id = ', JSON.stringify(userResult, undefined,2))
}).catch((e) => console.log(e));
