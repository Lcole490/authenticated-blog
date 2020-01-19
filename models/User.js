const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, min:6 },
  username: { type: String, required: true, unique: true },
  password: {type: String, required: true, min:6, max: 100},
  email:{type: String, required: true, max:255, min:6},
  date: { type: Date, default: Date.now }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;