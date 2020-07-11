const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors = {};

  if (!validator.isLength(data.name, {min: 2, max: 20})) {
    errors.name = 'Name must be between 2 and 20 characters';
  }

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

  if (isEmpty(data.password)) {
    errors.password2 = 'Confirmation password is required';
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}