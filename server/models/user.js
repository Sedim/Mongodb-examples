var mongoose = require('mongoose');

var User = mongoose.model('User', {
email: {
  type: String, // Be carefull of type casting because text: 22 will be converted to "22"
  required: true, // Validation
  minlength: 1,
  trim: true // Removes any leadng or trailing spaces
}
});

module.exports = {User};
