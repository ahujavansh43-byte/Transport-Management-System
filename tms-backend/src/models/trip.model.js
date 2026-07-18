import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    tripId: {
      type: String,
      required: true,
      unique: true,
    },

    shipments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shipment",
        required: true,
      },
    ],

    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
      required: true,
    },

    startLocation: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
    },

    distance: {
      type: Number,
      required: true,
    },

    fuelUsed: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: [
        "Scheduled",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Scheduled",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Trip", tripSchema);