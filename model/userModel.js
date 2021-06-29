import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please insert your name"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "please provide your email"],
    trim: true,
    unique: [true, "try another email..."],
  },

  password: {
    type: String,
    required: true,
    maxlength: [12, "Password Length not allowed more Than 12 character"],
    minlength: [6, "password length too short"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("user", userSchema);

export default User;
