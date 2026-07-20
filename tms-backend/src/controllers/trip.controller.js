import Trip from "../models/trip.model.js";
import Vehicle from "../models/vehicle.model.js";
import Driver from "../models/driver.model.js";
import Shipment from "../models/shipment.model.js"
import userModel from "../models/user.model.js";
import { createNotification } from "../services/notification.service.js";

// Create Trip
export const createTrip = async (req, res) => {
  try {
    // Check Vehicle
    const vehicle = await Vehicle.findById(req.body.vehicle);

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    if (vehicle.status !== "Available") {
      return res.status(400).json({
        success: false,
        message: "Vehicle is already assigned to another trip.",
      });
    }

    // Check Driver
    const driver = await Driver.findById(req.body.driver);

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    if (driver.status !== "Available") {
      return res.status(400).json({
        success: false,
        message: "Driver is already assigned to another trip.",
      });
    }

    // Create Trip
    const trip = await Trip.create(req.body);

    console.log("Trip Vehicle:", trip.vehicle);
    console.log("Trip Driver:", trip.driver);
    console.log("Trip Shipments:", trip.shipments);

    // Vehicle -> On Trip
    await Vehicle.findByIdAndUpdate(
      trip.vehicle,
      { status: "On Trip" },
      {new: true}
    );

    const updatedVehicle = await Vehicle.findById(trip.vehicle);
    console.log(updatedVehicle);

    // Driver -> On Trip
    await Driver.findByIdAndUpdate(
      trip.driver,
      { status: "On Trip" }
    );

    // Shipments -> In Transit
    await Shipment.updateMany(
      {
        _id: { $in: trip.shipments },
      },
      {
        status: "In Transit",
      }
    );

    const populatedTrip = await Trip.findById(trip._id)
      .populate({
        path: "shipments",
        populate: {
          path: "customer",
          select: "customerName companyName",
        },
      })
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

      // Find the driver document
// const driver = await Driver.findById(trip.driver);

// Find the corresponding user using email
const driverUser = await userModel.findOne({
  email: driver.email,
});

// Create notification
if (driverUser) {
  await createNotification({
    recipient: driverUser._id,
    title: "Trip Assigned",
    message: `Trip ${trip.tripId} has been assigned to you.`,
    type: "trip",
  });
}

    res.status(201).json({
      success: true,
      data: populatedTrip,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Trips
export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
      .populate({
        path: "shipments",
        populate: {
          path: "customer",
          select: "customerName companyName",
        },
      })
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

    res.status(200).json({
      success: true,
      count: trips.length,
      data: trips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Trip By ID
export const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id)
      .populate({
        path: "shipments",
        populate: {
          path: "customer",
          select: "customerName companyName",
        },
      })
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Trip
export const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
      .populate({
        path: "shipments",
        populate: {
          path: "customer",
          select: "customerName companyName",
        },
      })
      .populate("vehicle", "vehicleNumber")
      .populate("driver", "name");

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    if (trip.status === "Completed") {
      await Vehicle.findByIdAndUpdate(
        trip.vehicle,
        {
          status: "Available",
        }
      );

      await Driver.findByIdAndUpdate(
        trip.driver,
        {
          status: "Available",
        }
      );

      await Shipment.updateMany(
        {
          _id: { $in: trip.shipments },
        },
        {
          status: "Delivered",
        }
      );
    }

    res.status(200).json({
      success: true,
      data: trip,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Delete Trip
export const deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    // Make vehicle available again
    await Vehicle.findByIdAndUpdate(
      trip.vehicle,
      {
        status: "Available",
      }
    );

    // Make driver available again
    await Driver.findByIdAndUpdate(
      trip.driver,
      {
        status: "Available",
      }
    );

    // Reset all shipments to Pending
    await Shipment.updateMany(
      {
        _id: { $in: trip.shipments },
      },
      {
        status: "Pending",
      }
    );

    // Delete the trip
    await Trip.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};