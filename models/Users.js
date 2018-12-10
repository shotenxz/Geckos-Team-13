var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
});

// Init the User model schema
var User = mongoose.model("User", UserSchema);

module.exports = {
  User: User
};
