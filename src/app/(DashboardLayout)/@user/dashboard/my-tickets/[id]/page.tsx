import React from "react";
import { getAuthUser } from "@/lib/current.auth";
import { getSingleEvents } from "@/action/user";
import { Calendar, MapPin, Clock, Star, MessageSquare } from "lucide-react";
import ReviewForm from "@/Components/Form-Data/ReviewForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

const GiveReview = async ({ params }: PageProps) => {
  const { id } = await params;
  const user = await getAuthUser();
  const response = await getSingleEvents(id);
  const result = response?.data;

  if (!user)
    return (
      <div className="text-center py-20">Please login to give a review.</div>
    );

  if (!result)
    return (
      <div className="text-center py-20">Event not found.</div>
    );

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 mb-2">
          How was your experience?
        </h1>
        <p className="text-gray-500">
          Your feedback helps others and helps organizers improve.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: Event Details Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ec-accent/5 rounded-full -mr-16 -mt-16" />

            <img
              src={result.image}
              alt={result.title}
              className="w-full h-40 object-cover rounded-2xl mb-4 shadow-sm"
            />

            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {result.title}
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Calendar className="w-4 h-4 text-ec-accent" />
                <span>{result.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-ec-accent" />
                <span>{result.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-ec-accent" />
                <span className="line-clamp-1">{result.venue}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200/60">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Organizer
              </p>
              <p className="text-sm font-bold text-gray-800">
                {result.organizerName}
              </p>
            </div>
          </div>
        </div>

        {/* Right: The Actual Review Form */}
        <div className="lg:col-span-3">
          <ReviewForm eventId={result.id} userId={user.id} token={user.token} />
        </div>
      </div>
    </div>
  );
};

export default GiveReview;
