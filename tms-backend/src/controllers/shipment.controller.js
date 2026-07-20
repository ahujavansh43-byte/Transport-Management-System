import Shipment from "../models/shipment.model.js";
import { createNotification } from "../services/notification.service.js";
import userModel from "../models/user.model.js";


// Create Shipment
export const createShipment = async (req, res) => {
  try {
    const shipment = await Shipment.create(req.body);

    // Find all dispatchers
    const dispatchers = await userModel.find({
      role: "Dispatcher",
    });

    // Create notification for every dispatcher
    for (const dispatcher of dispatchers) {
      await createNotification({
        recipient: dispatcher._id,
        title: "New Shipment",
        message: `Shipment ${shipment.shipmentId} has been created.`,
        type: "shipment",
      });
    }

    res.status(201).json({
      success: true,
      data: shipment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Shipments
export const getShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find(req.params.id)
      .populate("customer","customerName companyName")
      .populate("vehicle","vehicleNumber")
      .populate("driver","name");

    res.json({
      success: true,
      count: shipments.length,
      data: shipments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Shipment By ID
export const getShipmentById = async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id)
      .populate("customer","customerName companyName")
      .populate("vehicle","vehicleNumber")
      .populate("driver","name");

    if (!shipment) {
      return res.status(404).json({
        success: false,
        message: "Shipment not found",
      });
    }

    res.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Shipment
export const updateShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("customer","customerName companyName")
      .populate("vehicle","vehicleNumber")
      .populate("driver","name");

    if (!shipment) {
      return res.status(404).json({
        success: false,
        message: "Shipment not found",
      });
    }

    res.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Shipment
export const deleteShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndDelete(req.params.id);

    if (!shipment) {
      return res.status(404).json({
        success: false,
        message: "Shipment not found",
      });
    }

    res.json({
      success: true,
      message: "Shipment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

