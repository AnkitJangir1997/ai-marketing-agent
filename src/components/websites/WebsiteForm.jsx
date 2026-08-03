"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function WebsiteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    country: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, domain } = formData;
    if (!name.trim() || !domain.trim()) {
      setFormError("Website Name and Domain are required fields.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      const res = await fetch("/api/websites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to add website");
      }

      toast.success("Website added successfully!");

      // Wait a brief moment for toast, then redirect
      setTimeout(() => {
        router.push("/dashboard/websites");
        router.refresh(); // Refresh route data
      }, 1000);
    } catch (err) {
      setFormError(err.message);
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <Toaster position="top-right" richColors />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">
            Website Information
          </h2>
          <p className="text-sm text-slate-400">
            Fill in the details below to add your website to the monitor queue.
          </p>
        </div>

        {formError && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-600 font-medium">
            {formError}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Website Name *
            </label>
            <Input
              name="name"
              placeholder="e.g. My Awesome Shop"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Domain / URL *
            </label>
            <Input
              name="domain"
              placeholder="e.g. awesomeshop.com"
              value={formData.domain}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Country
            </label>
            <Input
              name="country"
              placeholder="e.g. United States"
              value={formData.country}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Industry
            </label>
            <Input
              name="industry"
              placeholder="e.g. E-Commerce / SaaS"
              value={formData.industry}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end gap-3">
          <Button
            type="button"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 focus:ring-slate-300"
            disabled={isSubmitting}
            onClick={() => router.push("/dashboard/websites")}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Website"}
          </Button>
        </div>
      </form>
    </Card>
  );
}