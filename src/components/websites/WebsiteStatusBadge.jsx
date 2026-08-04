import Badge from "@/components/ui/Badge";

export default function WebsiteStatusBadge({ status }) {
  if (status === "Healthy") {
    return <Badge color="green">Healthy</Badge>;
  }

  if (status === "Warning") {
    return <Badge color="yellow">Warning</Badge>;
  }

  if (status === "Pending") {
    return <Badge color="blue">Pending</Badge>;
  }

  return <Badge color="red">{status || "Critical"}</Badge>;
}