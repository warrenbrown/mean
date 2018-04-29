const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  userName: String,
  password: String
});

mongoose.model('User', UserSchema);
