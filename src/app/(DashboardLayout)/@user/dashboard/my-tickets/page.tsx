import MyTicketTable from "@/Components/MyTicketTable";
import { getAuthUser } from "@/lib/current.auth";

const MyTickets = async () => {
  const user = await getAuthUser();
  const token = user?.token;
  if (!token) {
    return <div>Please login</div>;
  }
  const userEmail = user?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-ticket/${userEmail}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">
        My all tickets (total: {data.data?.length || 0})
      </h1>

      {data.data?.length === 0 ? (
        <p>No tickets found</p>
      ) : (
        <MyTicketTable data={data.data || []} />
      )}
    </div>
  );
};

export default MyTickets;
