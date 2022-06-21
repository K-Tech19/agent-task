const mongoose = require("mongoose")
// const seeds = require()

const Task = require("../models/Task")
const User = require("../models/User")
const Comment = require("../models/Comment")

User.deleteMany({}).then(()=>{
    console.log("delete all users");
    Task.deleteMany({}).then(()=>{
        console.log("delete all bookmarks");
        Comment.deleteMany({}).then(()=>{
            console.log("deleted all comments")

            //create a user
            User.create({
                username: "K-tech19",
                email: "Soapwash@bath.com",
                timezone: "Est",
                password: "fishfood",
                avatar: "Avatar images"
            }).then( kTech =>{
                Task.create({
                    title: "Fish @ 3pm",
                    taskNumber: "2",
                    taskBody: "I have to go fishing with Cam bring worms and a life jacket",
                    isCompleted: false,
                    date: 08122003,
                    currentlyActive: true
                }).then(()=>{
                    console.log("created Task: Fish @ 3pm")
                })

                Task.create({
                    title: "Driving test coming soon",
                    taskNumber: "1",
                    taskBody: "Prep for driving test, ask Adrian for a hand",
                    isCompleted: false,
                    date: 11292019,
                    currentlyActive: true
                }).then(()=>{
                    console.log("created Task: Driving test coming soon")
                })
            })
        })
    })
})