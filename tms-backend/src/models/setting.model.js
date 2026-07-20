import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      default: "TMS Logistics",
    },

    companyEmail: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    gstNumber: {
      type: String,
      default: "",
    },

    emailNotifications: {
      type: Boolean,
      default: true,
    },

    shipmentNotifications: {
      type: Boolean,
      default: true,
    },

    tripNotifications: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Setting",
  settingSchema
);