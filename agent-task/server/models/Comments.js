const mongoose = require("mongoose")

const commentsSchema = new mongoose.Schema({
    id: Number,
    textBody: text,
    createdAt: String,
    createdBy: String,
    userId: Number,
})

const Comments = mongoose.model("Comments", commentsSchema);

export default Comments