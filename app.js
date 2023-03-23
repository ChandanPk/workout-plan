import express from "express";
import { config } from "dotenv";
import workoutRoutes from "./routes/Workout.js";
import mongoose from "mongoose";

// cors config
config();

// express app
const app = express();

// Middlewares
app.use(express.json());
console.log(process.env.MONGODB_URI, "=+=+");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conneted to db successfully"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/workout", workoutRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// Spin server
app.listen(4000, () => {
  console.log("Server up and running on port 4000..");
});
