import { getSingleEvents } from "@/action/user";
import { Calendar, MapPin, Clock, ShieldCheck, Mail, User } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}
const EventsDetails = async ({ params }: PageProps) => {
  const { id } = await params;
  const eventId = id as string;

  const singeEvent = await getSingleEvents(eventId);
  console.log("single events", singeEvent);
  // destructure the objects
  const {
    title,
    image,
    description,
    date,
    time,
    venue,
    type,
    registrationFee,
    isFeatured,
    organizerName,
    organizerEmail,
    createdAt,
    updatedAt,
  } = singeEvent;

  return (
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

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <ShieldCheck className="text-green-500 w-5 h-5" />
                Instant Ticket Confirmation
              </li>
              <li className="flex items-center gap-3 text-gray-600 text-sm">
                <ShieldCheck className="text-green-500 w-5 h-5" />
                Secure Payment Gateway
              </li>
            </ul>

            <button className="w-full py-4 bg-ec-accent hover:bg-black text-white font-bold rounded-2xl transition-all transform active:scale-95 shadow-lg shadow-ec-accent/20">
              Buy Ticket Now
            </button>

            <p className="text-center text-gray-400 text-xs mt-4 italic">
              *Limited seats available for this {type.toLowerCase()} event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsDetails;
