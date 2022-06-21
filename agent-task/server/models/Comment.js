const mongoose = require("mongoose");

// const formatPostTime = (postTimeStamp) =>{

//     const postTime = new Date(postTimeStamp)
//     return postTime.toUTCString

// }

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    textBody: {
      type: String,
    },
    createdAt: {
      type: Date, default: Date.now
    },
    createdBy: {
      type: String,
    },
    userId: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comments", commentSchema);

module.exports = Comment
