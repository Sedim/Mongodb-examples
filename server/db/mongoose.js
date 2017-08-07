var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Attach internal Promises to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Todoapp',
  {useMongoClient: true});

//Export it
// module.exports = {
//   mongoose: mongoose
// };

module.exports = {mongoose}; //ES6 syntax see original above
