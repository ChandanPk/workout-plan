import express from "express";
import { config } from "dotenv";

// cors config
config();

// express app
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

// Spin server
app.listen(4000, () => {
  console.log("Server up and running on port 4000..");
});
