var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express(); // Instatiate express  Object

app.use(bodyParser.json()); // Middleware to handle the requests in JSON

//**** Start http: Post Handling
//Now we setup a route
// When http  (express())server recieves a a post
//request from client(or postsman ), load the body part
// only (Using the parser above into an instance of a todo object ()
app.post('/todos', (req,res) =>{

  console.log('Client req.body.text= ',req.body.text); //This is the request parsed by bodyParser
  console.log('Client req.body.completedAt= ',req.body.completedAt); //This is the request parsed by bodyParser
//  console.log('Client req.body= ',req.body); //This is the request parsed by bodyParser
//  console.log('Client req= ',req); //This is the request parsed by bodyParser

// Insantiate a new object
  var newTodoDocument = new Todo({
    text: req.body.text,
    completedAt: req.body.completedAt
  });
// save the new object to our Todo collection
  newTodoDocument.save().then ((doc) => {
    res.send(doc); // Respond to client with new document
  }, (e) => {
    res.status(400).send(e); // or respond to client with error #400
    // See http error numbbers web site for all codes
  });
});
//******* End Post handling

//*****  Start http: get handling
app.get('/todos', (req, res) => {
  //find all Documents in todos
  Todo.find().then((tododocs) => {

    //res.send (tododocs); //Send back the string
    //res.send ({tododocs: tododocs}) // Send back the object = String which is better
    // because we can send additional parameters if we want:
    //res.send ({
    //tododocs: tododocs,
    //somecode: 'somedesiredcode'});

    res.send ({tododocs}); // ES6 : because its the same as above

  }, (e) => {
    res.status(400).send(e);
  });
});
//******* End get handling




app.listen(3000, ()=> {
  console.log('Started on port 3000');
});