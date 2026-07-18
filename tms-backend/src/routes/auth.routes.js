import express from "express";

import {
  register,
  login,
  logout,
  getMe,
  updateProfile,
  changePassword,
} from "../controllers/auth.controller.js";

import protect
from "../middleware/auth.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.put("/profile",authMiddleware,updateProfile);

router.put("/change-password", authMiddleware, changePassword)

router.get("/me", protect, getMe);

export default router;