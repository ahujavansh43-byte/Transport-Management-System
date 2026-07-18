import Vehicle from "../models/vehicle.model.js";
import Driver from "../models/driver.model.js";
import Shipment from "../models/shipment.model.js";
import Trip from "../models/trip.model.js";
import Customer from "../models/customer.model.js"

export const getDashboardStats = async (req, res) => {
  try {
    // Counts
    const vehicleCount = await Vehicle.countDocuments();
    const driverCount = await Driver.countDocuments();
    const shipmentCount = await Shipment.countDocuments();
    const tripCount = await Trip.countDocuments();
    const customerCount = await Customer.countDocuments();
    // Vehicle Status
    const availableVehicles = await Vehicle.countDocuments({
      status: "Available",
    });

    const onTripVehicles = await Vehicle.countDocuments({
      status: "On Trip",
    });

    const maintenanceVehicles = await Vehicle.countDocuments({
      status: "Maintenance",
    });

    // Driver Status
    const availableDrivers = await Driver.countDocuments({
      status: "Available",
    });

    const onTripDrivers = await Driver.countDocuments({
      status: "On Trip",
    });

    const leaveDrivers = await Driver.countDocuments({
      status: "Leave",
    });

    // Shipment Status
    const pendingShipments = await Shipment.countDocuments({
      status: "Pending",
    });

    const inTransitShipments = await Shipment.countDocuments({
      status: "In Transit",
    });

    const deliveredShipments = await Shipment.countDocuments({
      status: "Delivered",
    });

    // Recent Trips
    const recentTrips = await Trip.find()
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name")
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,

      data: {
        vehicles: vehicleCount,
        drivers: driverCount,
        customers : customerCount,
        shipments: shipmentCount,
        trips: tripCount,

        // Dummy revenue for now
        revenue: 185000,

        vehicleStatus: {
          available: availableVehicles,
          onTrip: onTripVehicles,
          maintenance: maintenanceVehicles,
        },

        driverStatus: {
          available: availableDrivers,
          onTrip: onTripDrivers,
          leave: leaveDrivers,
        },

        shipmentStatus: {
          pending: pendingShipments,
          inTransit: inTransitShipments,
          delivered: deliveredShipments,
        },

        recentTrips,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};