const Workout = require('../models/Workout')
const mongoose = require('mongoose')

// Get all workouts
module.exports.get_workouts = async (req, res) => {

    try {
        const data = await Workout.find({}).sort({ createdAt: -1 })
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
        res.status(400).json({ "error": error.message })
    }
}

// Get single workout
module.exports.get_workout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ "error": "no such workout" })
        return
    }
    try {
        const data = await Workout.findById(id);
        res.status(200).json(data)
    } catch (error) {
        res.json({ "error": "Oops! No workout found" })
    }
}

// Delete a workout
module.exports.delete_workout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ "error": "no such workout" })
        return
    }
    try {
        const data = await Workout.findByIdAndDelete({ _id: id })
        if (!data) {
            res.status(404).json("No such workout found to delete")
            return
        }
        res.json({ "status": "Deleted succesfully" })

    } catch (error) {
        res.json({ "error": "No workout found" })
    }
}

// Patch/Update a workout
module.exports.patch_workout = async (req, res) => {
    const { id } = req.params

    console.log("Patch was called")
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ "error": "no such workout" })
        return
    }

    try {
        const data = await Workout.findOneAndUpdate({ _id: id }, {
            ...req.body
        })
        if (data) {
            return res.status(201).json(data)
        }
        throw "No workout found"
    } catch (error) {
        res.status(401).json({ "error": error })
    }
}
