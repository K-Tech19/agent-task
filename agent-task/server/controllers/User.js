const express = require("express");
const User = require("../models/User");
const router = express.Router()



router.get("/", (req,res)=>{
    res.send("hello from the user route")
})

router.post("/",(req,res)=>{
    let newUser = req.body
    // console.log(newUser)
    
    User.create(newUser).then((created )=>{
        res.json(created)
    })
})




module.exports = router
