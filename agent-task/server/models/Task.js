
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    taskNumber: {
      type: Number,
    },
    taskBody: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
    },
    date: {
      type: Date, default: Date.now
    },
    currentlyActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
