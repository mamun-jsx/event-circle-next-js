"use client";

import React, { useState } from "react";
import { IEvent } from "@/Types/fetchDataType";
import EventCard from "@/Components/EventCard";

const FeatureEvent = ({ allEvents }: { allEvents: IEvent[] }) => {
  const [activeTab, setActiveTab] = useState<"PUBLIC" | "PRIVATE" | "FEATURED">(
    "PUBLIC",
  );

  // Filter logic based on the active tab
  const filteredEvents = allEvents.filter((event) => {
    if (activeTab === "FEATURED") return event.isFeatured === true;
    return event.type === activeTab;
  });

  const tabStyle = (tab: string) =>
    `px-6 py-2 rounded-full font-bold transition-all border ${
      activeTab === tab
        ? "bg-black text-white border-black"
        : "bg-white text-gray-500 border-gray-200 hover:border-black"
    }`;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <h2 className="text-3xl font-black text-gray-900">Explore Events</h2>

        {/* Tab Buttons */}
        <div className="flex gap-3 bg-gray-100 p-1.5 rounded-full">
          <button
            onClick={() => setActiveTab("PUBLIC")}
            className={tabStyle("PUBLIC")}
          >
            Public
          </button>
          <button
            onClick={() => setActiveTab("PRIVATE")}
            className={tabStyle("PRIVATE")}
          >
            Private
          </button>
          <button
            onClick={() => setActiveTab("FEATURED")}
            className={tabStyle("FEATURED")}
          >
            Featured
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400 border-2 border-dashed border-gray-100 rounded-3xl">
            No {activeTab.toLowerCase()} events found at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureEvent;
