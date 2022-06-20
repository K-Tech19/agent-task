const mongoose = require("mongoose")

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
            type: Text,
        },
        createdAt: {
            type: new Date().toUTCString,
        },
        createdBy: {
            type: String,
        },
        userId: {
            type: Number,
        }
})

const Comment = mongoose.model("Comments", commentSchema);

export default Comment