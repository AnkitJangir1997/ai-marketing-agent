export default function StatsCard({
  title,
  value,
  change,
  color,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {value}
      </h2>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold ${color}`}
      >
        {change}
      </span>
    </div>
  );
}