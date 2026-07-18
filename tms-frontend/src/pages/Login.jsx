export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Transport Management System
        </h1>

        <p className="mb-6 text-center text-slate-500">
          Login to continue
        </p>

        <button className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}