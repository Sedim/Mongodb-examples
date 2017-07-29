var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
text: {
  type: String, // Be carefull of type casting because text: 22 will be converted to "22"
  required: true, // Validation
  minlength: 1,
  trim: true // Removes any leadng or trailing spaces
},
completed: {
  type: Boolean,
  default: false
},
completedAt: {
  type: Number,
  default: null
}
});

module.exports = {Todo};
