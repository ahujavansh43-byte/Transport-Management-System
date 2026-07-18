import { useNavigate, useParams } from "react-router-dom";

import LoadingSpinner from "@/Components/common/LoadingSpinner";

import TripForm from "../components/TripForm";
import { useTrip } from "../hooks/useTripService";
import { useUpdateTrip } from "../hooks/useUpdateTrip";

export default function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useTrip(id);

  const updateTrip = useUpdateTrip();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <h2 className="mt-10 text-center">
        Failed to load trip.
      </h2>
    );
  }

  const trip = data.data;

  const defaultValues = {
    tripId: trip.tripId,
    shipment: trip.shipment?._id,
    vehicle: trip.vehicle?._id,
    driver: trip.driver?._id,
    startLocation: trip.startLocation,
    destination: trip.destination,
    startDate: trip.startDate
      ? trip.startDate.split("T")[0]
      : "",
    endDate: trip.endDate
      ? trip.endDate.split("T")[0]
      : "",
    distance: trip.distance,
    fuelUsed: trip.fuelUsed,
    status: trip.status,
  };

  const handleSubmit = (formData) => {
    updateTrip.mutate(
      {
        id,
        tripData: formData,
      },
      {
        onSuccess: () => {
          navigate("/trips");
        },
      }
    );
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Edit Trip
      </h1>

      <TripForm
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        buttonText="Update Trip"
      />
    </div>
  );
}