// const express = require('express');
const express = require('express')
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const workoutRoutes = require('./routes/Workout')


// Middlewares
app.use(express.json())
app.use("/api/workout",  workoutRoutes)



// Connect DB
mongoose.connect(process.env.MONGODB_DEV_URI)
    .then(()=> console.log("Connected to DB!"))
    .catch(err => console.log(err, err.message))





app.get('/', (req, res)=> {
    res.send("Homepage")
})


// Server Port
app.listen(process.env.PORT, ()=> console.log("Server up and running on port 5000.."))