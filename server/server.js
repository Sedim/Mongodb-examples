var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express(); // Instatiate express  Object

app.use(bodyParser.json()); // Middleware to handle the requests in JSON

//Now we setup a route
// When http  (express())server recieves a a post
//request from client(or postsman ), load the body
// into an instance of a todo object ()
app.post('/todos', (req,res) =>{

  console.log('Client req.body.text= ',req.body.text); //This is the request parsed by bodyParser
//  console.log('Client req.body= ',req.body); //This is the request parsed by bodyParser
//  console.log('Client req= ',req); //This is the request parsed by bodyParser

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then ((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, ()=> {
  console.log('Started on port 3000');
});
