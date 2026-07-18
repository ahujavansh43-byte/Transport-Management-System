import express from "express";

import {
  createDriver,
  getDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
  getAvailableDrivers,
} from "../controllers/driver.controller.js";

const router = express.Router();

router.post("/", createDriver);

router.get("/", getDrivers);

router.get("/available", getAvailableDrivers);

router.get("/:id", getDriverById);

router.put("/:id", updateDriver);

router.delete("/:id", deleteDriver);


export default router;