const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');

var id = '597fc9e76f81d20d84fc536811';

// Todo.find({
//   _id: id
// }).then ((todoResults) => {
//   console.log('Todo = ', todoResults)
// });
//
// Todo.findOne({
//   _id: id
// }).then ((todoResult) => {
//   console.log('Todo = ', todoResult)
// });

Todo.findById(id).then ((todoResult) => {
  if (!todoResult){
    return console.log('Id not found');
  }
  console.log('Todo by id = ', todoResult)
}).catch((e) => console.log(e)); 
