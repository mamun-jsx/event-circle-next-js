"use client";
type Ticket = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  userName: string;
  email: string;
  mobile: string;
  price: number;
  transactionId: string;
  status: string;
};

export default function TicketTable({ data }: { data: Ticket[] }) {
  
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[900px] w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Event</th>
            <th className="p-3">Image</th>
            <th className="p-3">Date & Time</th>
            <th className="p-3">User Info</th>
            <th className="p-3">Price</th>
            <th className="p-3">Transaction ID</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((ticket) => (
            <tr key={ticket.id} className="border-t hover:bg-gray-50">
              {/* Event */}
              <td className="p-3 font-medium">{ticket.title}</td>

              {/* Image */}
              <td className="p-3">
                <img
                  src={ticket.image}
                  alt={ticket.title}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
              </td>

              {/* Date & Time */}
              <td className="p-3">
                <p>{ticket.date}</p>
                <p className="text-sm text-gray-500">{ticket.time}</p>
              </td>

              {/* User Info */}
              <td className="p-3 text-sm">
                <p className="font-medium">{ticket.userName}</p>
                <p>{ticket.email}</p>
                <p>{ticket.mobile}</p>
              </td>

              {/* Price */}
              <td className="p-3 font-semibold">৳{ticket.price}</td>

              {/* Transaction */}
              <td className="p-3 text-xs break-all">{ticket.transactionId}</td>

              {/* Status */}
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    ticket.status === "SUCCESS"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}