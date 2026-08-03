const issues = [
  {
    title: "Missing Meta Description",
    total: 14,
  },
  {
    title: "Broken Links",
    total: 6,
  },
  {
    title: "Large Images",
    total: 21,
  },
  {
    title: "Missing ALT Tags",
    total: 38,
  },
];

export default function SeoIssues() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="mb-6 text-xl font-bold text-slate-800 dark:text-slate-100">
        SEO Issues
      </h2>

      <div className="space-y-4">
        {issues.map((issue) => (
          <div
            key={issue.title}
            className="flex items-center justify-between rounded-xl bg-slate-50/60 p-4 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80"
          >
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {issue.title}
            </span>

            <span className="rounded-full bg-red-100 text-red-700 px-3 py-1 text-xs font-bold dark:bg-red-950/40 dark:text-red-400">
              {issue.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}