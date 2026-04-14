import React from "react";
import { Calendar, MapPin, Clock, Tag } from "lucide-react";
import { IEvent } from "@/Types/fetchDataType";
import Link from "next/link";

const EventCard = ({ event }: { event: IEvent }) => {
  return (
    // Add 'flex flex-col h-full' to ensure all cards have the same height
    <div className="flex flex-col h-full border border-gray-800 rounded-2xl overflow-hidden hover:border-ec-accent transition-all group shadow-lg">
      {/* Image Section */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 uppercase">
          {event.type}
        </div>
        {event.isFeatured && (
          <div className="absolute top-4 left-4 bg-ec-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content Section - Add 'flex-1 flex flex-col' */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-black mb-2 line-clamp-1 group-hover:text-ec-accent transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-700 text-sm line-clamp-2 mb-4 leading-relaxed">
          {event.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-3 mb-6">
          <div className="flex items-center text-gray-300 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-ec-accent" />
            <p className="text-black">
              {new Date(event.date).toLocaleDateString()}
            </p>
          </div>
          <div className="flex items-center text-ec-accent text-sm">
            <Clock className="w-4 h-4 mr-2 text-ec-accent" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-800 text-sm col-span-2">
            <MapPin className="w-4 h-4 mr-2 text-ec-accent" />
            <span className="line-clamp-1">{event.venue}</span>
          </div>
        </div>

        {/* Footer Section - Use 'mt-auto' to push this to the bottom */}
        <div className="mt-auto">
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div>
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                Organizer
              </p>
              <p className="text-gray-600 text-sm font-medium">
                {event.organizerName}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                Fee
              </p>
              <p className="text-ec-secondary font-bold">
                {event.registrationFee > 0
                  ? `৳${event.registrationFee}`
                  : "Free"}
              </p>
            </div>
          </div>

          <Link
            href={`/events/${event.id}`}
            className="block w-full mt-6 py-3 bg-black text-center hover:bg-ec-accent text-white text-sm font-bold rounded-xl transition-all border border-white/10 hover:border-ec-accent"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};


export default EventCard;
