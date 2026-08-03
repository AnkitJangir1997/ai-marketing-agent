export default function Input({
  placeholder,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 dark:border-slate-800 dark:bg-slate-800/90 dark:text-slate-100 dark:placeholder-slate-500 ${className}`}
      {...props}
    />
  );
}