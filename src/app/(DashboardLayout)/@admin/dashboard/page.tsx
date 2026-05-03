import StatsOverview from "@/Components/Dashboard/StatsOverview";
import UserInfoCard from "@/Components/UserInfoCard";
import { getAuthUser } from "@/lib/current.auth";
import { getAllEvents } from "@/action/user";
import { getAllUser } from "@/action/admin";
import { Users, CalendarDays, History } from "lucide-react";

const AdminDashboard = async () => {
  const user = await getAuthUser();

  // Fetch data for stats
  const [eventsRes, usersRes] = await Promise.all([
    getAllEvents(),
    getAllUser(user?.token),
  ]);

  const allEvents = eventsRes?.data || [];
  // getAllUser returns response directly in its current action implementation
  const allUsers = (usersRes as any)?.data || [];
  const today = new Date();

  const stats = [
    {
      label: "Total Events",
      value: allEvents.length,
      iconName: "CalendarDays" as const,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Past Events",
      value: allEvents.filter((e: any) => new Date(e.date) < today).length,
      iconName: "History" as const,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      label: "Total Users",
      value: allUsers.length,
      iconName: "Users" as const,
      color: "text-ec-accent",
      bgColor: "bg-pink-50",
    },
  ];

  return (
    <div className="py-10">
      <UserInfoCard user={user} />
      <StatsOverview stats={stats} />
    </div>
  );
};

export default AdminDashboard;
