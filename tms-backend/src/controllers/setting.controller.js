import Setting from "../models/setting.model.js";

export const getSettings = async (req, res) => {
  try {
    let settings = await Setting.findOne();

    if (!settings) {
      settings = await Setting.create({});
    }

    res.status(200).json({
      success: true,
      data: settings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const updateSettings = async (req, res) => {
  try {

    let settings = await Setting.findOne();

    if (!settings) {
      settings = await Setting.create({});
    }

    settings.companyName =
      req.body.companyName;

    settings.companyEmail =
      req.body.companyEmail;

    settings.phone =
      req.body.phone;

    settings.address =
      req.body.address;

    settings.gstNumber =
      req.body.gstNumber;

    settings.emailNotifications =
      req.body.emailNotifications;

    settings.shipmentNotifications =
      req.body.shipmentNotifications;

    settings.tripNotifications =
      req.body.tripNotifications;

    await settings.save();

    res.json({
      success: true,
      message:
        "Settings updated successfully",
      data: settings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getSystemStatus = async (
  req,
  res
) => {

  res.json({
    success: true,

    data: {
      backend: "Online",

      database: "Connected",

      version: "1.0.0",
    },
  });

};