const express = require("express");
const router = express.Router()

router.get("/", (req,res)=>{
    res.send("hello from the user route")
})




module.exports = router