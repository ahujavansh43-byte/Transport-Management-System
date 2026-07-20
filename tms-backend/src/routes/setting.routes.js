import express from "express";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/authorize.middleware.js";

import {
  getSettings,
  updateSettings,
  getSystemStatus,
} from "../controllers/setting.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  authorize("Admin"),
  getSettings
);

router.put(
  "/",
  protect,
  authorize("Admin"),
  updateSettings
);

router.get(
  "/status",
  protect,
  authorize("Admin"),
  getSystemStatus
);

export default router;