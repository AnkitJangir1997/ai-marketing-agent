import DashboardLayout from "@/components/layout/DashboardLayout";
import PageHeader from "@/components/ui/PageHeader";
import WebsiteForm from "@/components/websites/WebsiteForm";

export default function AddWebsitePage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Add Website"
        description="Register a website to start SEO monitoring."
      />

      <WebsiteForm />
    </DashboardLayout>
  );
}