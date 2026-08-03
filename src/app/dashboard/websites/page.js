"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import WebsiteSearch from "@/components/websites/WebsiteSearch";
import WebsiteTable from "@/components/websites/WebsiteTable";

export default function WebsitesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <PageHeader
        title="Websites"
        description="Manage all your websites from one place."
        buttonText="Add Website"
        buttonHref="/dashboard/websites/add"
      />

      <WebsiteSearch
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mt-6">
        <WebsiteTable searchQuery={searchQuery} />
      </div>
    </DashboardLayout>
  );
}