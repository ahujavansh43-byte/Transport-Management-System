import Vehicle from "../models/vehicle.model.js";
import Driver from "../models/driver.model.js";
import Customer from "../models/customer.model.js";
import Shipment from "../models/shipment.model.js";
import Trip from "../models/trip.model.js";

export const getDashboardReport = async (req, res) => {
  try {
    const range = req.query.range || "30days";

let startDate = null;

const today = new Date();

switch (range) {
  case "today":
    startDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    break;

  case "7days":
    startDate = new Date();
    startDate.setDate(today.getDate() - 7);
    break;

  case "30days":
    startDate = new Date();
    startDate.setDate(today.getDate() - 30);
    break;

  case "90days":
    startDate = new Date();
    startDate.setDate(today.getDate() - 90);
    break;

  default:
    startDate = null;
}

const dateFilter = startDate
  ? {
      createdAt: {
        $gte: startDate,
      },
    }
  : {};
    const [
      totalVehicles,
      availableVehicles,
      onTripVehicles,
      maintenanceVehicles,

      totalDrivers,
      availableDrivers,
      onTripDrivers,

      totalCustomers,

      totalShipments,
      pendingShipments,
      inTransitShipments,
      deliveredShipments,
      cancelledShipments,

      totalTrips,
      scheduledTrips,
      activeTrips,
      completedTrips,
      cancelledTrips,
    ] = await Promise.all([

     Vehicle.countDocuments(dateFilter),
Vehicle.countDocuments({
  ...dateFilter,
  status: "Available",
}),
Vehicle.countDocuments({
  ...dateFilter,
  status: "On Trip",
}),
Vehicle.countDocuments({
  ...dateFilter,
  status: "Maintenance",
}),

Driver.countDocuments(dateFilter),
Driver.countDocuments({
  ...dateFilter,
  status: "Available",
}),
Driver.countDocuments({
  ...dateFilter,
  status: "On Trip",
}),

Customer.countDocuments(dateFilter),

Shipment.countDocuments(dateFilter),
Shipment.countDocuments({
  ...dateFilter,
  status: "Pending",
}),
Shipment.countDocuments({
  ...dateFilter,
  status: "In Transit",
}),
Shipment.countDocuments({
  ...dateFilter,
  status: "Delivered",
}),
Shipment.countDocuments({
  ...dateFilter,
  status: "Cancelled",
}),

Trip.countDocuments(dateFilter),
Trip.countDocuments({
  ...dateFilter,
  status: "Scheduled",
}),
Trip.countDocuments({
  ...dateFilter,
  status: "In Progress",
}),
Trip.countDocuments({
  ...dateFilter,
  status: "Completed",
}),
Trip.countDocuments({
  ...dateFilter,
  status: "Cancelled",
}),
    ]);

    res.status(200).json({
      success: true,
      data: {
        vehicles: {
          total: totalVehicles,
          available: availableVehicles,
          onTrip: onTripVehicles,
          maintenance: maintenanceVehicles,
        },

        drivers: {
          total: totalDrivers,
          available: availableDrivers,
          onTrip: onTripDrivers,
        },

        customers: {
          total: totalCustomers,
        },

        shipments: {
          total: totalShipments,
          pending: pendingShipments,
          inTransit: inTransitShipments,
          delivered: deliveredShipments,
          cancelled: cancelledShipments,
        },

        trips: {
          total: totalTrips,
          scheduled: scheduledTrips,
          active: activeTrips,
          completed: completedTrips,
          cancelled: cancelledTrips,
        },
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMonthlyTripReport = async (req, res) => {
  try {
    const monthlyTrips = await Trip.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalTrips: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: monthlyTrips,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getRevenueReport = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Revenue report coming soon",
  });
};

export const getTripReport = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Trip report coming soon",
  });
};

export const getShipmentReport = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shipment report coming soon",
  });
};

export const getVehicleReport = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Vehicle report coming soon",
  });
};

export const getDriverReport = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Driver report coming soon",
  });
};

export const getRecentTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

    res.status(200).json({
      success: true,
      data: trips,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getRecentShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("customer", "customerName companyName")
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

    res.status(200).json({
      success: true,
      data: shipments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};