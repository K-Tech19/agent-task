const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: Number,
    username: String,
    timezone: Number,
    email: String,
    password: String,
    avatar: String
})

const User = mongoose.model("User", userSchema);

export default User;