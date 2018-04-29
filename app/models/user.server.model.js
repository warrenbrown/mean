const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    required: true,
    match: /.+\@.+\..+/
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      } else {
if (url.indexOf('http://') !== 0   && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }

        return url;
     }
    }
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.authenticate = function(password) {
  return this.password === password;
};

UserSchema.statics.findOneByUsername = function (username, callback) {
  this.findOne({ username: new RegExp(username, 'i') }, callback);
};

UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('User', UserSchema);
