import DashboardLayout from "@/components/layout/DashboardLayout";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatsSection from "@/components/dashboard/StatsSection";
import ChartCard from "@/components/dashboard/ChartCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import WebsiteTable from "@/components/dashboard/WebsiteTable";
import SeoIssues from "@/components/dashboard/SeoIssues";
import AISuggestions from "@/components/dashboard/AISuggestions";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <WelcomeSection />

      <StatsSection />

      <div className="mt-8">
        <AISuggestions />
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartCard />
        </div>

        <ActivityCard />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WebsiteTable />
        </div>

        <SeoIssues />
      </section>
    </DashboardLayout>
  );
}