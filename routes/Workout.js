import { Router } from "express";
import {
  getWorkouts,
  updateWorkout,
  addWorkout,
  deleteWorkout,
} from "../controllers/workoutControllers.js";

const router = Router();

// Get workouts
router.get("/", getWorkouts);

// Add workout
router.post("/", addWorkout);

// Delete workout
router.delete("/:id", deleteWorkout);

// Update workoout
router.patch("/:id", updateWorkout);

export default router;
