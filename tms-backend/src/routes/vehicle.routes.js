import express from "express";

import {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
  getAvailableVehicles,
} from "../controllers/vehicle.controller.js";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

const router = express.Router();

router.get("/",protect, authorize("Admin"), getVehicles);

router.get("/available",protect, authorize("Admin"), getAvailableVehicles);

router.get("/:id",protect, authorize("Admin"), getVehicleById);

router.post("/",protect, authorize("Admin"), createVehicle);


router.put("/:id",protect, authorize("Admin"),updateVehicle);

router.delete("/:id",protect, authorize("Admin"),deleteVehicle);


export default router;