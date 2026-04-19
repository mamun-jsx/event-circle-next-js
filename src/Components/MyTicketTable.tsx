import Link from "next/link";

type Ticket = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  organizerEmail: string;
  userName: string;
  email: string;
  transactionId: string;
  status: string;
  eventId: string;
};

const MyTicketTable = ({ data }: { data: Ticket[] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[900px] w-full border border-gray-300 rounded-lg">
        {/* HEADER */}
        <thead>
          <tr className="border-b bg-gray-100 text-left">
            <th className="p-3">Event</th>
            <th className="p-3">Date & Time</th>
            <th className="p-3">Organizer</th>
            <th className="p-3">Transaction</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data?.map((ticket) => (
            <tr key={ticket.id} className="border-b hover:bg-gray-50">
              {/* EVENT */}
              <td className="p-3 flex items-center gap-3">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <span>{ticket.title}</span>
              </td>

              {/* DATE & TIME */}
              <td className="p-3 text-sm">
                <p>{ticket.date}</p>
                <p className="text-gray-500">{ticket.time}</p>
              </td>

              {/* ORGANIZER INFO */}
              <td className="p-3 text-sm">
                <p className="font-medium">{ticket.userName}</p>
                <p>{ticket.email}</p>
                <p className="text-gray-500">{ticket.organizerEmail}</p>
              </td>

              {/* TRANSACTION */}
              <td className="p-3 text-xs break-all">{ticket.transactionId}</td>

              {/* STATUS */}
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    ticket.status === "SUCCESS"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>

              {/* ACTION */}
              <td className="p-3 text-center">
                {ticket?.status === "SUCCESS" && (
                  <Link
                    href={`/dashboard/my-tickets/${ticket?.eventId}`}
                    className="px-3 py-1 border rounded text-sm hover:bg-gray-100"
                  >
                    Review
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTicketTable;
