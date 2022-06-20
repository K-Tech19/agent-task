const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        taskNumber: {
            type:Number,
        },
        taskBody: {
            type: String,
        },
        isCompleted: {
            type: Boolean,
        },
        date: {
            type: new Date().toUTCString,
        },
        currentlyActive: {
            type: Boolean,
        }
})


const Task = mongoose.model("Task", taskSchema)

export default Task