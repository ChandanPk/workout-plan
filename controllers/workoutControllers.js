// Get workouts
const getWorkouts = (req, res) => {
  res.send("get workouts..");
};

// Add workout
const addWorkout = (req, res) => {
  res.send("add workout");
};

// Delete workout
const deleteWorkout = (req, res) => {
  res.send("delete workout");
};

// Update workoout
const updateWorkout = (req, res) => {
  res.send("update workout");
};

export { getWorkouts, addWorkout, deleteWorkout, updateWorkout };
