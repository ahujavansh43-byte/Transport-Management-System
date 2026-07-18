import express from "express";

import {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip,
} from "../controllers/trip.controller.js";

const router = express.Router();

// Create Trip
router.post("/", createTrip);

// Get All Trips
router.get("/", getTrips);

// Get Trip By ID
router.get("/:id", getTripById);

// Update Trip
router.put("/:id", updateTrip);

// Delete Trip
router.delete("/:id", deleteTrip);

export default router;