const express = require("express");
const router = express.Router();

const Task = require("../models/Task");


router.get("/", (req,res)=>{
    res.send("Hello All my Task how are you?")
    Task.find({}).then(allTask =>{
        res.json(allTask)
    })
})

router.get("/:title", (req, res) => {
  Task.findOne({ taskTitle: req.params.title }).then((task) => {
    res.json(task);
    console.log(task);
  });
});


module.exports = router;