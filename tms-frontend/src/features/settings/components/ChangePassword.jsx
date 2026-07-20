import { useState } from "react";
import toast from "react-hot-toast";

import { useChangePassword } from "../hooks/useSettings";

export default function ChangePassword() {

  const mutation =
    useChangePassword();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      form.newPassword !==
      form.confirmPassword
    ) {

      return toast.error(
        "Passwords do not match"
      );

    }

    try {

      await mutation.mutateAsync({
        currentPassword:
          form.currentPassword,

        newPassword:
          form.newPassword,
      });

      toast.success(
        "Password Updated"
      );

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch {

      toast.error(
        "Update Failed"
      );

    }

  };

  return (

    <div className="rounded-lg bg-white p-6 shadow">

      <h2 className="mb-6 text-xl font-bold">
        Change Password
      </h2>

      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >

        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          className="w-full rounded border p-3"
          value={form.currentPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          className="w-full rounded border p-3"
          value={form.newPassword}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full rounded border p-3"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button
          className="rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          Update Password
        </button>

      </form>

    </div>

  );

}