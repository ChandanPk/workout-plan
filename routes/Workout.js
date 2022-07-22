const express = require('express')
const { get_workouts, addWorkout_post, get_workout, delete_workout, patch_workout } = require('../controllers/workoutController')
const route = express.Router()
const Workout = require('../models/Workout')

// TEST route
route.get('/', (req, res) => res.send('Workout route'))

// Add a Workout
route.post('/', addWorkout_post)

// GET workouts
route.get('/workouts', get_workouts)

//Fetch a single workout
route.get('/:id', get_workout)

//Delete a workout
route.delete('/:id', delete_workout)

// Patch/Update a workout
route.patch('/:id', patch_workout)

module.exports = route