import api from "@/api/axios";

// Get all notifications
export const getNotifications = () =>
  api.get("/notifications");

// Mark one notification as read
export const markNotificationRead = (id) =>
  api.put(`/notifications/${id}/read`);

// Mark all notifications as read
export const markAllNotificationsRead = () =>
  api.put("/notifications/read-all");

// Delete notification
export const deleteNotification = (id) =>
  api.delete(`/notifications/${id}`);