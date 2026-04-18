import TicketTable from "@/Components/TicketTable";
import { cookies } from "next/headers";

const AllTickets = async () => {
  // ✅ Get token from cookies (server-side)
  const token = (await cookies()).get("auth-token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/all-tickets`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();
  const tickets = result?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-white">All Tickets</h1>
      <TicketTable data={tickets} />
    </div>
  );
};

export default AllTickets;
