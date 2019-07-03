const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gmailSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default:"Email",
    unique: true
  },
  id : {
    type:String,
    default:"id"
  },
  photourl : {
    type:String,
    required:true
  }
});
module.exports = {
  Gmail: mongoose.model('Gmail', gmailSchema)
};
