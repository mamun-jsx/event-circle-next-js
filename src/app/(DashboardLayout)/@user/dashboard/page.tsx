import StatsOverview from "@/Components/Dashboard/StatsOverview";
import UserInfoCard from "@/Components/UserInfoCard";
import { getAuthUser } from "@/lib/current.auth";
import { getAllEvents, getMyTickets } from "@/action/user";
import { Ticket, CalendarCheck, CalendarDays } from "lucide-react";

const UserDashboard = async () => {
  const user = await getAuthUser();
  
  // Fetch data for stats
  const [eventsRes, ticketsRes] = await Promise.all([
    getAllEvents(),
    user?.email ? getMyTickets(user.email, user.token) : Promise.resolve({ data: [] })
  ]);

  const allEvents = eventsRes?.data || [];
  const myTickets = ticketsRes?.data || [];
  const today = new Date();

  const stats = [
    {
      label: "Events Booked",
      value: myTickets.length,
      iconName: "Ticket" as const,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      label: "Past Events",
      value: myTickets.filter((t: any) => new Date(t.date) < today).length,
      iconName: "CalendarCheck" as const,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      label: "Available Now",
      value: allEvents.filter((e: any) => new Date(e.date) >= today).length,
      iconName: "CalendarDays" as const,
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

export default UserDashboard;
