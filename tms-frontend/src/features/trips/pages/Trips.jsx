import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import LoadingSpinner from "@/Components/common/LoadingSpinner";
import TripTable from "../components/TripTable";

import { useTrips } from "../hooks/useTripService";
import { useDeleteTrip } from "../hooks/useTripService";

export default function Trips() {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useTrips();
  const { mutate: deleteTrip } = useDeleteTrip();

  if (isLoading) return <LoadingSpinner />;

  if (isError) {
    return (
      <h2 className="mt-10 text-center text-red-600">
        Failed to load trips.
      </h2>
    );
  }

  const trips = data?.data || [];

  const filteredTrips = trips.filter((trip) =>
    trip.tripId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Trips</h1>

        <Link
          to="/trips/add"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Trip
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search Trip ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-lg border p-3"
      />

      <TripTable
        trips={filteredTrips}
        onDelete={deleteTrip}
      />
    </div>
  );
}