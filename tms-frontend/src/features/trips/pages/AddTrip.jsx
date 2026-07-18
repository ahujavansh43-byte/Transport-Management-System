import { useNavigate } from "react-router-dom";

import TripForm from "../components/TripForm";
import { useAddTrip } from "../hooks/useAddTrip";

export default function AddTrip() {
  const navigate = useNavigate();

  const addTrip = useAddTrip();

  const handleSubmit = (formData) => {
    addTrip.mutate(formData, {
      onSuccess: () => {
        navigate("/trips");
      },
    });
  };

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Add Trip
      </h1>

      <TripForm
        onSubmit={handleSubmit}
        buttonText="Add Trip"
      />
    </div>
  );
}