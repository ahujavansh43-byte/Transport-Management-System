import express from "express";
import cors from "cors";

import vehicleRoutes from "./routes/vehicle.routes.js";
import driverRoutes from "./routes/driver.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import shipmentRoutes from "./routes/shipment.routes.js";
import tripRoutes from "./routes/trip.routes.js";

import customerRoutes from "./routes/customer.routes.js";
import reportRoutes from "./routes/report.routes.js";

import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({origin:"http://localhost:5173",credentials:true,}));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Transport Management API Running 🚛",
  });
});

app.use("/api/v1/vehicles", vehicleRoutes);
app.use("/api/v1/drivers", driverRoutes);
app.use("/api/v1/shipments",shipmentRoutes);
app.use("/api/v1/trips",tripRoutes);
app.use("/api/v1/customers",customerRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);
app.use("/api/v1/reports", reportRoutes);
app.use("/api/v1/auth", authRoutes);
app.use(cors({origin: "http://localhost:5173",credentials:true,}))

export default app;