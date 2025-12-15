
const metrics = [
  { title: "Applications", value: "1,534" },
  { title: "Shortlisted", value: "869" },
  { title: "Hired", value: "236" },
  { title: "Rejected", value: "429" },
];

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {metrics.map((m) => (
        <div
          key={m.title}
          className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm
            hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">{m.title}</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
            {m.value}
          </h3>
        </div>
      ))}
    </div>
  );
}
