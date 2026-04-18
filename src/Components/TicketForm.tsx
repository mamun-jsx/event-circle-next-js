"use client";

import { useState } from "react";
import { buyTickets } from "../action/user/buyTickets";
import { User, Mail, Phone, Ticket, Loader2, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

// For the event details passed to the form
interface EventDetails {
  eventId: string;
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  registrationFee: number;
  type: "PRIVATE" | "PUBLIC" | string;
  organizerEmail: string;
}

// For the authenticated user data
interface AuthUser {
  token: string;
  id: string;
  email: string;
  role: "USER" | "ADMIN" | string;
}

// Props interface for your TicketForm component
interface TicketFormProps {
  eventDetails: EventDetails;
  user: AuthUser | null;
}

export default function TicketForm({ eventDetails, user }: TicketFormProps) {

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    if (!user?.token) {
      toast.error("Please login first");
   
      setLoading(false);
      return;
    }
    try {
      const result = await buyTickets(eventDetails, user.token, formData);
      if (result?.success && result?.url) {
        window.location.replace(result.url);
      } else {
        alert(result?.message || "Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header Info for the Form */}
      <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-4">
        <div className="p-2 bg-ec-accent/10 rounded-lg">
          <Ticket className="w-5 h-5 text-ec-accent" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Attendee Information
          </h3>
          <p className="text-xs text-gray-500">
            Enter your details to receive the ticket
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="group">
          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest mb-1.5 block">
            Full Name
          </label>
          <div className="relative transition-all duration-200">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-ec-accent" />
            <input
              name="userName"
              type="text"
              required
              placeholder="e.g. John Doe"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm transition-all focus:bg-white focus:ring-4 focus:ring-ec-accent/5 focus:border-ec-accent outline-none"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="group">
          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest mb-1.5 block">
            Email Address
          </label>
          <div className="relative opacity-80">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              readOnly
              className="w-full pl-11 pr-4 py-3.5 bg-gray-100 border border-gray-200 rounded-2xl text-sm text-gray-500 cursor-not-allowed outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="group">
          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 tracking-widest mb-1.5 block">
            Mobile Number
          </label>
          <div className="relative transition-all duration-200">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-ec-accent" />
            <input
              name="mobile"
              type="tel"
              required
              placeholder="017XXXXXXXX"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50/50 border border-gray-200 rounded-2xl text-sm transition-all focus:bg-white focus:ring-4 focus:ring-ec-accent/5 focus:border-ec-accent outline-none"
            />
          </div>
        </div>
      </div>

      {/* Dynamic CTA Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full relative overflow-hidden py-4 rounded-2xl font-bold text-sm transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group shadow-xl ${
          loading
            ? "bg-gray-100 text-gray-400 cursor-wait"
            : "bg-black text-white hover:bg-ec-accent shadow-ec-accent/10"
        }`}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Securing Your Spot...</span>
          </>
        ) : (
          <>
            <span>Confirm & Pay ৳{eventDetails.registrationFee}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
