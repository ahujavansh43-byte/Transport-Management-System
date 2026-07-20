export default function SystemStatus({ status }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        System Status
      </h2>

      <div className="space-y-3">

        <p>
          Backend:
          <span className="ml-2 font-semibold text-green-600">
            {status.backend}
          </span>
        </p>

        <p>
          Database:
          <span className="ml-2 font-semibold text-green-600">
            {status.database}
          </span>
        </p>

        <p>
          Version:
          <span className="ml-2 font-semibold">
            {status.version}
          </span>
        </p>

      </div>
    </div>
  );
}