const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
  let errors = {};

  if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!validator.isLength(data.password, {min: 6, max: 15})) {
    errors.password = 'Password must be between 6 and 15 characters';
  }

  if (isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}