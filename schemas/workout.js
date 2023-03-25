import { Schema, model } from "mongoose";

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    reps: {
      type: Number,
      required: true,
    },

    load: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model("workout", workoutSchema);
