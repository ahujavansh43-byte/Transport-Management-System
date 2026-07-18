import express from "express";

import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

// Get all customers
router.get("/", getCustomers);

// Get customer by ID
router.get("/:id", getCustomerById);

// Create customer
router.post("/", createCustomer);

// Update customer
router.put("/:id", updateCustomer);

// Delete customer
router.delete("/:id", deleteCustomer);

export default router;