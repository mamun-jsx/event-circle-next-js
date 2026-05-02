import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen py-20 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden text-black">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-ec-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-ec-accent/5 rounded-full -ml-16 -mb-16 blur-3xl"></div>

          <header className="mb-12 relative z-10">
            <div className="inline-block px-4 py-2 rounded-full bg-ec-primary/10 text-ec-primary text-xs font-bold uppercase tracking-widest mb-6">
              Legal Information
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-ec-primary to-ec-accent">Policy</span>
            </h1>
            <p className="text-gray-400 font-medium">Last Updated: May 2, 2026</p>
          </header>

          <div className="space-y-12 text-gray-700 leading-relaxed relative z-10">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-ec-primary text-white rounded-lg flex items-center justify-center text-sm">01</span>
                Introduction
              </h2>
              <p>
                Welcome to EventCircle. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform to manage or attend events. By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-ec-primary text-white rounded-lg flex items-center justify-center text-sm">02</span>
                Information We Collect
              </h2>
              <p>
                To provide you with the best experience, we collect several types of information:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "Identity Data", desc: "Full name and professional title." },
                  { title: "Contact Data", desc: "Email address and phone number." },
                  { title: "Transaction Data", desc: "Details about event tickets and history." },
                  { title: "Technical Data", desc: "IP address and device information." },
                ].map((item, i) => (
                  <li key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <strong className="block text-ec-primary mb-1">{item.title}</strong>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-ec-primary text-white rounded-lg flex items-center justify-center text-sm">03</span>
                How We Use Your Information
              </h2>
              <p>
                Your information allows us to:
              </p>
              <ul className="list-none space-y-3 mt-4">
                {[
                  "Manage your event registrations and ticket delivery.",
                  "Personalize your experience on our platform.",
                  "Provide customer support and technical assistance.",
                  "Enhance platform security and prevent fraudulent activity."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-ec-accent/10 flex items-center justify-center text-ec-accent mt-1 flex-shrink-0">✓</div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-ec-primary text-white rounded-lg flex items-center justify-center text-sm">04</span>
                Data Security
              </h2>
              <div className="p-6 bg-gradient-to-br from-ec-primary/5 to-ec-accent/5 rounded-3xl border border-ec-primary/10">
                <p className="text-gray-800">
                  We implement robust security measures to protect your personal data. All sensitive information (like payment details) is encrypted using SSL technology. We limit access to your data to employees and partners who have a legitimate business need to know.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-ec-primary text-white rounded-lg flex items-center justify-center text-sm">05</span>
                Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal data at any time. If you wish to exercise these rights, please visit your account settings or contact our support team.
              </p>
            </section>

            <section className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Support</h2>
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-sm text-gray-400 uppercase font-bold mb-1">Email</p>
                  <p className="text-lg font-bold text-ec-primary">support@eventcircle.com</p>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <p className="text-sm text-gray-400 uppercase font-bold mb-1">Location</p>
                  <p className="text-lg font-bold text-black">Dhaka, Bangladesh</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
