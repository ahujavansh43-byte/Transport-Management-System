import { useState } from "react";
import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";
import { updateProfile } from "@/api/authApi";


export default function Profile() {

  const { user, fetchCurrentUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await updateProfile(formData);

      await fetchCurrentUser();

      toast.success("Profile Updated");

    } catch (error) {

      toast.error(
        error.response?.data?.message
      );

    } finally {

      setLoading(false);

    }

  };


    
  return (
    <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow">

      <h1 className="mb-8 text-3xl font-bold">
        My Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>

          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Email</label>

          <input
            disabled
            value={user?.email}
            className="mt-2 w-full rounded-lg border bg-gray-100 p-3"
          />

        </div>

        <div>

          <label>Phone</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 w-full rounded-lg border p-3"
          />

        </div>

        <div>

          <label>Role</label>

          <input
            disabled
            value={user?.role}
            className="mt-2 w-full rounded-lg border bg-gray-100 p-3"
          />

        </div>

        <button
          disabled={loading}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          {loading
            ? "Updating..."
            : "Update Profile"}
        </button>

      </form>

    </div>

    
  );
}