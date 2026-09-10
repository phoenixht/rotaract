import type { Metadata } from "next";
import DashboardClient from "@/components/auth/DashboardClient";

export const metadata: Metadata = { title: "Dashboard — District Portal" };

export default function DashboardPage() {
  return <DashboardClient />;
}
