import Workout from "../schemas/workout.js";
import { isValidObjectId } from "mongoose";

// Get workouts
const getWorkouts = async (req, res) => {
  try {
    const response = await Workout.find({});
    const data = await response;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

// Add workout
const addWorkout = async (req, res) => {
  const { reps, load, title } = req.body;
  try {
    const response = await Workout.create({ reps, load, title });
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (isValidObjectId("641d4c6a22a480b247d760b4")) {
    try {
      const response = await Workout.findByIdAndRemove({ _id: id });
    } catch (error) {}
  }
};

// Update workoout
const updateWorkout = (req, res) => {
  res.send("update workout");
};

export { getWorkouts, addWorkout, deleteWorkout, updateWorkout };
