import { useState } from "react";
import { Bell } from "lucide-react";

import NotificationDropdown from "./NotificationDropdown";

import {
  useNotifications,
  useMarkNotificationRead,
  useMarkAllNotificationsRead,
} from "../hooks/useNotifications";

export default function NotificationBell() {

  const [open, setOpen] = useState(false);

  const { data } = useNotifications();

  const markRead =
    useMarkNotificationRead();

  const markAll =
    useMarkAllNotificationsRead();

  const notifications =
    data?.data || [];

  const unread =
    notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="relative"
      >
        <Bell
          className="cursor-pointer"
        />

        {unread > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
            {unread}
          </span>
        )}

      </button>

      {open && (

        <NotificationDropdown
          notifications={notifications}
          onRead={(id) =>
            markRead.mutate(id)
          }
          onMarkAll={() =>
            markAll.mutate()
          }
        />

      )}

    </div>
  );
}