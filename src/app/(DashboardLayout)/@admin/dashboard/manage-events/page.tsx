import { getAllEvents } from "@/action/user";
import { DeleteButton } from "@/Components/DeleteButton";
import { IEvent } from "@/Types/fetchDataType";

import { Edit, ExternalLink } from "lucide-react";
import Link from "next/link";

const ManageEvents = async () => {
  const response = await getAllEvents();
  const events: IEvent[] = Array.isArray(response) ? response : response?.data || [];

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Manage Events
            </h1>
            <p className="text-gray-500 mt-1">
              Total {events.length} events active
            </p>
          </div>
          <Link
            href="/dashboard/add-events"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-ec-accent transition-all active:scale-95"
          >
            + Create New Event
          </Link>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse bg-white min-w-[800px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Event Info
                </th>
                <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Fee
                </th>
                <th className="p-5 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {events.map((event: IEvent) => (
                <tr
                  key={event.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  {/* Column 1: Info */}
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-14 h-14 rounded-lg object-cover border border-gray-100 shrink-0"
                      />
                      <div>
                        <p className="font-bold text-gray-900 line-clamp-1 text-base">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Column 2: Type */}
                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        event.type === "PUBLIC"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {event.type}
                    </span>
                  </td>

                  {/* Column 3: Fee */}
                  <td className="p-5 font-bold text-gray-700">
                    {event.registrationFee > 0 ? (
                      `৳${event.registrationFee}`
                    ) : (
                      <span className="text-green-600">Free</span>
                    )}
                  </td>

                  {/* Column 4: Actions */}
                  <td className="p-5">
                    <div className="flex justify-end items-center gap-3">
                      <Link
                        href={`/events/${event.id}`}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="View"
                      >
                        <ExternalLink size={20} />
                      </Link>

                      <Link
                        href={`/dashboard/manage-events/${event.id}`}
                        className="p-2 text-gray-400 hover:text-ec-accent hover:bg-pink-50 rounded-lg transition-all"
                        title="Edit"
                      >
                        <Edit size={20} />
                      </Link>

                      <DeleteButton id={event.id as string} />
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
