import StatsCard from "./StatsCard";

export default function StatsSection() {
  const stats = [
    {
      title: "Websites",
      value: "12",
      change: "+2%",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Keywords",
      value: "1,240",
      change: "+14%",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "SEO Score",
      value: "91",
      change: "+5%",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Issues",
      value: "18",
      change: "-6%",
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatsCard
          key={item.title}
          {...item}
        />
      ))}
    </section>
  );
}