const express = require('express');
const app = express();
const parser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")



// controllers
const userController = require("./controllers/user")
const tasksController = require("./controllers/tasks")
const commentsController = require("./controllers/comments")
app.get('/',(req,res)=>{
    res.send("Hello Server")
})


// Routes
app.use("/user", userController);
app.use("/tasks", tasksController);
app.use("/comments", commentsController);
// app.use("/templateRoute", templateController);

//middleware
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(cors())

const PORT = process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Connecting to port ${PORT}!`)
})