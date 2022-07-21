const Workout = require('../models/Workout')

// Get workouts
module.exports.get_workouts = async (req, res) => {

    try {
        const data = await Workout.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(401).json({ "error": error })
    }
}

// Add Workout
module.exports.addWorkout_post = async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const data = await Workout.create({ title, load, reps })
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get single workout
module.exports.get_workout = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const data = await Workout.findById(id);
        res.status(200).json(data)
    } catch (error) {
        res.json({"error": "Oops! No workout found"})        
    }
}