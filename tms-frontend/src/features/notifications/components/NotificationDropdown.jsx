import NotificationItem from "./NotificationItem";

export default function NotificationDropdown({
  notifications,
  onRead,
  onMarkAll,
}) {
  return (
    <div className="absolute right-0 mt-3 w-96 rounded-lg border bg-white shadow-xl z-50">

      <div className="flex items-center justify-between border-b p-4">

        <h2 className="font-bold">
          Notifications
        </h2>

        <button
          onClick={onMarkAll}
          className="text-sm text-blue-600 hover:underline"
        >
          Mark All Read
        </button>

      </div>

      <div className="max-h-96 overflow-y-auto">

        {notifications.length === 0 ? (

          <p className="p-6 text-center text-slate-500">
            No Notifications
          </p>

        ) : (

          notifications.map((item) => (
            <NotificationItem
              key={item._id}
              notification={item}
              onRead={onRead}
            />
          ))

        )}

      </div>

    </div>
  );
}