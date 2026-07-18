import express from "express";

import {
  getDashboardReport,
  getMonthlyTripReport,
  getRecentTrips,
  getRecentShipments,
  getRevenueReport,
  getTripReport,
  getShipmentReport,
  getVehicleReport,
  getDriverReport,
} from "../controllers/report.controller.js";

const router = express.Router();

router.get("/dashboard", getDashboardReport);
router.get("/revenue", getRevenueReport);
router.get("/trips", getTripReport);
router.get("/shipments", getShipmentReport);
router.get("/vehicles", getVehicleReport);
router.get("/drivers", getDriverReport);
router.get("/monthly-trips", getMonthlyTripReport);
router.get("/recent-trips", getRecentTrips);
router.get("/recent-shipments", getRecentShipments);


export default router;