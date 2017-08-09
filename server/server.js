const _ = require('lodash');//string manipulation and other
const express = require('express');// web server
const bodyParser = require('body-parser');// middle ware for web server
const {ObjectID} = require('mongodb');// This loads the ObjectID method directly from mongodb


var {mongoose} = require('./db/mongoose');// mongoosedb helper
var {Todo} = require('./models/todo');// database collection schema
var {User} = require('./models/user');// database collection schema


var app = express(); // Instatiate express  web server
const port = process.env.PORT || 3000; //get the remote PORT from the env  or use localhost:3000//This is for Heroku integration

app.use(bodyParser.json()); // Middleware to handle the requests in JSON

//**** Start http: Post Handling (Adding documents (aka record))
//Now we setup a route
// When http  (express())server recieves a a post
//request from client(or postsman ), load the body part
// only (Using the parser above into an instance of a todo object ()
app.post('/todos', (req,res) =>{
  console.log('Client req.body.text= ',req.body.text); //This is the request parsed by bodyParser
//  console.log('Client req.body.completedAt= ',req.body.completedAt); //This is the request parsed by bodyParser
//  console.log('Client req.body= ',req.body); //This is the request parsed by bodyParser
//  console.log('Client req= ',req); //This is the request parsed by bodyParser
// Insantiate a new object
  var newTodoDocument = new Todo({
    text: req.body.text,
//    completedAt: req.body.completedAt
  });
  newTodoDocument.save().then ((doc) => {// save the new object to our Todo collection
    res.send(doc); // Respond to client with new document
  }, (e) => {
    res.status(400).send(e);// See http error numbbers web site for all codes// or respond to client with error #400
  });
});

//***** GET ALL DOCUMENTS Start http: get handling
app.get('/todos', (req, res) => {
  Todo.find().then((tododocs) => {  //find all Documents in todos
// res.send (tododocs); //Send back the string
// res.send ({tododocs: tododocs}) // Send back the object = String which is better
// because we can send additional parameters if we want:
//  res.send ({
//tododocs: tododocs,
//somecode: 'somedesiredcode'});
    console.log('We are here', tododocs);
    res.send ({tododocs}); // ES6 : because its the same as above

  }, (e) => {
    res.status(400).send(e);
  });
});
//**********  GET SPECIFIC DOCUMENT BY id to handle the client side request: GET /todos/12345
//var id = "598783340a509ae7a16fe433";
app.get('/todos/:id', (req, res) =>{
  var id = req.params.id //this gets the sent id
  if (!ObjectID.isValid(id)) {// if id is not valid
    return res.status(400).send('***ID Not valid');
  }

  Todo.findById(id).then ((todoResult) => {

    if (!todoResult){
      return res.status(404).send({});// If id not found
    }
    res.send({todoResult});// id found send it back as an object
  }).catch((e) => {
    res.status(500).send('***Database or server error');
  });
});

//********** to handle the remove
app.delete('/todos/:id', (req, res) =>{
  var id = req.params.id; //this gets the sent id

  if (!ObjectID.isValid(id)) {// if id is not valid
    return res.status(400).send('***ID Not valid');
  }

  Todo.findByIdAndRemove(id).then ((todoResult) => {
    if (!todoResult){
      return res.status(404).send({});// If id not found
    }
    res.send({todoResult});// id found send it back as an object
  }).catch((e) => {
    res.status(500).send('***Database or server error');
  });
});

//********* PATCH method to MODIFY A record
app.patch('/todos/:id', (req, res) => {
  var id = req.params.id; //this gets the sent id on the http request
//below we use the lodash "_" to pick only the
//the properties we want from the user client "body" http request
//so that body contains only the properties allowed to be changed
//by the user.
  var body = _.pick(req.body, ['text','completed']);

  if (!ObjectID.isValid(id)) {// if id is not valid
    return res.status(400).send('***ID Not valid');
  }

  if (_.isBoolean(body.completed) && body.completed) {
//here we add to the body above the .completedAt property
    body.completedAt = new Date().getTime();//create a new date/time object and load it with current unix time method

  } else {
    body.completed = false;
    body.completedAt = null;
  }
// http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
// https://docs.mongodb.com/manual/reference/operator/update-field/

  Todo.findByIdAndUpdate(id,{$set: body}, {new: true}).then ((todo) =>{
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send('****> ', e);
  });
});







app.listen(port, ()=> {
  console.log(`Started on port ${port}`);
});
