import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      enum: ["Truck", "Container", "Trailer", "Mini Truck"],
    },

    capacity: {
      type: Number,
      required: true,
    },

    driverName: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Available", "On Trip", "Maintenance"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicle", vehicleSchema);