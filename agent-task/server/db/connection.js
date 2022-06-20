const mongoose = require("mongoose");

mongoose.Promise = Promise

// set uri for the connectino to out local mongodb
const mongoURI = 'mongodb://localhost/{placeholder}'

// connect to the database, with is imported mongoose instance

mongoose
.connect(mongoURI, {useNewUrlParser: true})
.then(instance => console.log(`Connected to db: ${instance.connections[0].name}`))
.catch(error => console.log("Connection failed", error))

module.exports =  mongoose