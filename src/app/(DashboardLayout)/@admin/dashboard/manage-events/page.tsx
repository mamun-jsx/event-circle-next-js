import { getAllEvents } from "@/action/user";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

const ManageEvents = async () => {
  const response = await getAllEvents();
  const events = Array.isArray(response) ? response : response?.data || [];

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Events</h1>
            <p className="text-gray-500 mt-1">
              Total {events.length} events active
            </p>
          </div>
          <Link
            href="/dashboard/add-events"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-ec-accent transition-colors"
          >
            + Create New Event
          </Link>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Event Info
                </th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Fee
                </th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Organizer
                </th>
                <th className="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {events.map((event: any) => (
                <tr
                  key={event.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={event.image}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover border border-gray-100"
                      />
                      <div>
                        <p className="font-bold text-gray-900 line-clamp-1">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                        event.type === "PUBLIC"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {event.type}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-gray-700">
                    {event.registrationFee > 0
                      ? `৳${event.registrationFee}`
                      : "Free"}
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-gray-900">
                      {event.organizerName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {event.organizerEmail}
                    </p>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/events/${event.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        title="View Details"
                      >
                        <ExternalLink size={18} />
                      </Link>
                      <Link
                        href={`/dashboard/manage-events/${event.id}`}
                        className="p-2 text-gray-400 hover:text-ec-accent transition-colors"
                        title="Edit Event"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                        title="Delete Event"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
