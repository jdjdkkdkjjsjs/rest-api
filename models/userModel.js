import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      default: "user@gmail.com",
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
