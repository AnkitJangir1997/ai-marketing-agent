import Input from "@/components/ui/Input";

export default function WebsiteSearch({ value, onChange }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <Input
        placeholder="Search websites..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}