import { getAllEvents } from "@/action/user";
import EventCard from "@/Components/EventCard";
import { IEvent } from "@/Types/fetchDataType";

export const dynamic = "force-dynamic";

// Event page
const Events = async () => {
  const response = await getAllEvents();
  const eventList = Array.isArray(response) ? response : response?.data || [];

  if (eventList.length === 0) {
    return (
      <div className="text-white p-10">
        No events found or data format mismatch.
      </div>
    );
  }

  return (
    <div className="min-h-screen md:w-10/12 mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventList.map((event: IEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
