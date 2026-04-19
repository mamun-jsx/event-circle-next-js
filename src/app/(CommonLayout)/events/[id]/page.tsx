import { getSingleEvents } from "@/action/user";
import TicketForm from "@/Components/TicketForm";
import { getAuthUser } from "@/lib/current.auth";
import {
  Calendar,
  MapPin,
  Clock,
  Mail,
  User,
  Quote,
  UserCircle,
  Star,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}
interface reviewData {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  eventId: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}
const EventsDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  const eventId = id as string;
  const singeEvent = await getSingleEvents(eventId);
  console.log(singeEvent);
  const user = await getAuthUser();
  if (!singeEvent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Event not found
      </div>
    );
  }
  const {
    title,
    image,
    description,
    date,
    time,
    venue,
    type,
    registrationFee,
    organizerName,
    organizerEmail,
  } = singeEvent;
  return (
    <>
      <section className="bg-white min-h-screen pb-20">
        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] bg-gray-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6 flex gap-3">
            <span className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              {type}
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
          {/* Left Side: Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap gap-6 mb-8 text-gray-600 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="text-ec-accent w-5 h-5" />
                <span className="font-medium">
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-ec-accent w-5 h-5" />
                <span className="font-medium">{time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-ec-accent w-5 h-5" />
                <span className="font-medium">{venue}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                About the Event
              </h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>

            {/* Organizer Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-wrap gap-10">
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold mb-2 tracking-widest">
                  Organizer
                </p>
                <div className="flex items-center gap-2 text-gray-800 font-bold">
                  <User className="w-4 h-4" /> {organizerName}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold mb-2 tracking-widest">
                  Contact Support
                </p>
                <div className="flex items-center gap-2 text-gray-800 font-bold">
                  <Mail className="w-4 h-4" /> {organizerEmail}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-100">
              <div className="mb-6">
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Registration Fee
                </p>
                <h2 className="text-4xl font-black text-gray-900">
                  {registrationFee > 0 ? `৳${registrationFee}` : "Free"}
                </h2>
              </div>
              <TicketForm
                eventDetails={{
                  eventId,
                  title,
                  image,
                  date,
                  time,
                  venue,
                  registrationFee,
                  type,
                  organizerEmail,
                }}
                user={user}
              />
              <p className="text-center text-gray-400 text-xs mt-4 italic">
                * Limited seats available for this {type.toLowerCase()} event *
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 mx-auto w-10/12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-gray-900 tracking-tight">
              Attendee Feedback{" "}
              <span className="text-ec-accent">
                ({singeEvent.reviews?.length || 0})
              </span>
            </h2>
          </div>

          {singeEvent.reviews && singeEvent.reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {singeEvent.reviews.map((review: reviewData) => (
                <div
                  key={review.id}
                  className="relative p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-ec-accent/10 rounded-full flex items-center justify-center">
                      <UserCircle className="w-6 h-6 text-ec-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">
                        {review.user?.name || "Verified Attendee"}
                      </h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                        {new Date(review.createdAt).toLocaleDateString(
                          "en-GB",
                          { day: "numeric", month: "short", year: "numeric" },
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < Math.floor(review.rating / 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                    <span className="ml-2 text-xs font-bold text-gray-400">
                      {review.rating}/10
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-400 font-medium">
                No reviews yet. Be the first to share your experience!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EventsDetails;
