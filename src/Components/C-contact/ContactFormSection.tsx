"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactFormSection = () => {
  // 1. Define states for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 2. Validation check
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    // Simulate API call
    console.log({ name, email, message });
    toast.success("Message sent successfully!");

    // 3. Clear form after success
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Left: Interactive Details */}
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[var(--ec-primary)] mb-4">
            Contact Info
          </h2>
          <p className="text-[var(--ec-gray-200)]">
            Reach out via any of these channels.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              label: "Email",
              value: "hello@eventcircle.com",
              color: "var(--ec-accent)",
            },
            {
              label: "Phone",
              value: "+880 1234-567890",
              color: "var(--ec-secondary)",
            },
            {
              label: "Location",
              value: "Dhaka, Bangladesh",
              color: "var(--ec-primary)",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: item.color }}
              >
                <span className="text-xl">✉</span>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-[var(--ec-gray-300)]">
                  {item.label}
                </p>
                <p className="text-lg font-medium text-black group-hover:text-[var(--ec-primary)] transition-colors">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Glassmorphism Form */}
      <div className="bg-[var(--ec-gray-100)]/30 p-8 rounded-3xl border border-white shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full p-4 bg-white rounded-xl outline-none focus:ring-2 ring-[var(--ec-accent)] transition-all"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 bg-white rounded-xl outline-none focus:ring-2 ring-[var(--ec-accent)] transition-all"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Tell us about your event..."
            className="w-full p-4 bg-white rounded-xl outline-none focus:ring-2 ring-[var(--ec-accent)] transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-[var(--ec-primary)] text-white font-bold rounded-xl hover:bg-[var(--ec-accent)] transition-all shadow-lg shadow-[var(--ec-primary)]/20 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
