import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import MyTicketTable from "@/Components/MyTicketTable";

type TokenPayload = {
  id: string;
  email: string;
  role: string;
};

const MyTickets = async () => {
  const token = (await cookies()).get("auth-token")?.value;

  if (!token) {
    return <div>Please login</div>;
  }

  // ✅ decode JWT
  const payload = jwtDecode<TokenPayload>(token);
  const userEmail = payload.email;
  console.log(payload);

  console.log(userEmail, " email ");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/my-ticket/${userEmail}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold text-black mb-6">
        My all tickets (total : {data.data?.length})
      </h1>
      <MyTicketTable data={data.data} />
    </div>
  );
};

export default MyTickets;
