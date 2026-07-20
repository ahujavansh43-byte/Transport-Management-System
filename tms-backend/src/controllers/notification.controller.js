import Notification from "../models/notification.model.js";

// Get notifications
export const getNotifications = async (req, res) => {
  try {

    const notifications =
      await Notification.find({
        recipient: req.user._id,
      })
        .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: notifications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Mark one notification as read
export const markAsRead = async (req, res) => {
  try {

    const notification =
      await Notification.findByIdAndUpdate(
        req.params.id,
        {
          read: true,
        },
        {
          new: true,
        }
      );

    res.json({
      success: true,
      data: notification,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Mark all notifications as read
export const markAllAsRead = async (req, res) => {
  try {

    await Notification.updateMany(
      {
        recipient: req.user._id,
        read: false,
      },
      {
        read: true,
      }
    );

    res.json({
      success: true,
      message: "All notifications marked as read",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete notification
export const deleteNotification = async (req, res) => {
  try {

    await Notification.findByIdAndDelete(
      req.params.id
    );

    res.json({
      success: true,
      message: "Notification deleted",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};