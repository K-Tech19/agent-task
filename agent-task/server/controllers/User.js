const express = require("express");
const router = express.Router()



router.get("/", (req,res)=>{
    res.send("hello from the user route")
})

router.post("/",(req,res)=>{
    let newTask = req.body
    console.log(newTask)
    res.json(newTask)
})




module.exports = router
