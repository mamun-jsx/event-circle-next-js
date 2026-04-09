"use client";

import Link from "next/link";

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
      {/* Dynamic Brand Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-[var(--ec-primary)]/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] bg-[var(--ec-accent)]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content Side */}
        <div className="text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--ec-gray-100)]/50 border border-[var(--ec-gray-200)] text-[var(--ec-primary)] text-xs font-bold uppercase tracking-widest mb-6">
            ✨ Next Generation Event Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-black mb-6">
            Every Moment <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ec-primary)] via-[var(--ec-accent)] to-[var(--ec-secondary)]">
              Deserves a Circle
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--ec-gray-300)] max-w-lg mb-10 leading-relaxed">
            Host spectacular events, manage instant ticketing, and build your
            community with the world's most intuitive platform.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/dashboard/add-events"
              className="px-8 py-4 bg-[var(--ec-primary)] text-white font-bold rounded-2xl hover:bg-[var(--ec-accent)] transition-all shadow-xl shadow-[var(--ec-primary)]/20 hover:scale-105"
            >
              Start Hosting
            </Link>
            <Link
              href="/dashboard/buy-events"
              className="px-8 py-4 border-2 border-[var(--ec-primary)] text-[var(--ec-primary)] font-bold rounded-2xl hover:bg-[var(--ec-primary)] hover:text-white transition-all hover:scale-105"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Visual Side */}
        <div className="order-1 lg:order-2 relative">
          {/* Glassmorphism Feature Card */}
          <div className="absolute -top-10 -left-10 p-6 bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-20 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-ec-accent rounded-full flex items-center justify-center text-white">
                🎟️
              </div>
              <div>
                <p className="text-xs font-bold text-(--ec-gray-200)">
                  Real-time Sales
                </p>
                <p className="text-lg font-black text-black">+2,480 Tickets</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-[40px] overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <img
              src="/events-team-hero.webp"
              alt="Vibrant Event"
              className="w-full aspect-4/5 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-(--ec-primary)/40 to-transparent"></div>
          </div>

          {/* Secondary Decorative Element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ec-secondary rounded-full -z-10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
