import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Available", "On Trip", "Leave"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Driver", driverSchema);