import StatusBadge from "@/Components/common/StatusBadge";

export default function RecentTripsTable({ trips }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-5 text-xl font-bold">
        Recent Trips
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">Trip ID</th>
              <th className="pb-3">Driver</th>
              <th className="pb-3">Vehicle</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Start Date</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <tr
                key={trip._id}
                className="border-b"
              >
                <td className="py-3">
                  {trip.tripId}
                </td>

                <td>
                  {trip.driver?.name}
                </td>

                <td>
                  {trip.vehicle?.vehicleNumber}
                </td>

                <td>
                  <StatusBadge status={trip.status} />
                </td>

                <td>
                  {new Date(
                    trip.startDate
                  ).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}