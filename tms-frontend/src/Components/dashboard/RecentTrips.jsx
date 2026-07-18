import LoadingSpinner from "@/Components/common/LoadingSpinner";
import StatusBadge from "@/Components/common/StatusBadge";
import { useDashboardStats } from "@/features/dashboard/hooks/useDashboardStats";

export default function RecentTrips({data}) {
  const {  isLoading, isError } = useDashboardStats();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <div className="rounded-xl bg-white p-6 shadow">
        Failed to load recent trips.
      </div>
    );
  }

  const trips = data.recentTrips;

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-6 text-xl font-bold">
        Recent Trips
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">Trip</th>
              <th className="px-4 py-3 text-left">Driver</th>
              <th className="px-4 py-3 text-left">Vehicle</th>
              <th className="px-4 py-3 text-left">Destination</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((trip) => (
              <tr
                key={trip._id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-4 py-3">
                  {trip.tripId}
                </td>

                <td className="px-4 py-3">
                  {trip.driver?.name}
                </td>

                <td className="px-4 py-3">
                  {trip.vehicle?.vehicleNumber}
                </td>

                <td className="px-4 py-3">
                  {trip.destination}
                </td>

                <td className="px-4 py-3">
                  <StatusBadge status={trip.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}