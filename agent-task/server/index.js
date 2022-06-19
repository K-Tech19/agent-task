const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Server")
})

const PORT = 8000

app.listen(PORT,()=>{
    console.log(`Connecting to port ${PORT}!`)
})