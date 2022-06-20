const express = require('express');
const app = express();
const userController = require("./controllers/User")
const tasksController = require("./controllers/Tasks")
const commentsController = require("./controllers/Comments")


app.get('/',(req,res)=>{
    res.send("Hello Server")
})

// controllers
app.use("/user", userController);
app.use("/tasks", tasksController);
app.use("/comments", commentsController);
// app.use("/user", userController);

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Connecting to port ${PORT}!`)
})