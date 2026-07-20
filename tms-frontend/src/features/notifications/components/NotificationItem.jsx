import { Bell } from "lucide-react";

export default function NotificationItem({
  notification,
  onRead,
}) {
  return (
    <div
      onClick={() => onRead(notification._id)}
      className={`cursor-pointer border-b p-3 hover:bg-slate-100 ${
        !notification.read ? "bg-blue-50" : ""
      }`}
    >
      <div className="flex items-start gap-3">

        <Bell
          size={18}
          className="mt-1 text-blue-600"
        />

        <div className="flex-1">

          <h4 className="font-semibold">
            {notification.title}
          </h4>

          <p className="text-sm text-slate-600">
            {notification.message}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {new Date(
              notification.createdAt
            ).toLocaleString()}
          </p>

        </div>
      </div>
    </div>
  );
}