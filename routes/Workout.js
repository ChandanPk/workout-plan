const express = require('express')
const { get_workouts, addWorkout_post, get_workout } = require('../controllers/workoutController')
const route = express.Router()
const Workout = require('../models/Workout')

route.get('/', () => console.log('Workout route'))

route.post('/', addWorkout_post)

route.get('/workouts', get_workouts)

route.get('/:id', get_workout)

module.exports = route