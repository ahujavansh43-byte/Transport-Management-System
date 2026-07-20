import Notification from "../models/notification.model.js";

export const createNotification = async ({
  recipient,
  title,
  message,
  type = "system",
}) => {
  try {
    return await Notification.create({
      recipient,
      title,
      message,
      type,
    });
  } catch (error) {
    console.error("Notification Error:", error.message);
  }
};