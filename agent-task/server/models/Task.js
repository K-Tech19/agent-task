const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id: Number,
    taskNumber: Number,
    taskBody: String,
    isCompleted: Boolean,
    date: String,
    currentlyActive: Boolean
})


const Task = mongoose.model("Task", taskSchema)

export default Task