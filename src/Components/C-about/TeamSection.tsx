"use client";

const TeamSection = () => {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-black text-[var(--ec-primary)] mb-12 uppercase tracking-tighter">
        Founded By
      </h2>

      <div className="flex flex-col items-center">
        {/* Profile Image Container */}
        <div className="relative group">
          {/* Decorative Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--ec-accent)] animate-spin-slow opacity-50"></div>

          <div className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-2xl overflow-hidden relative z-10">
            <img
              src="/myimage.png"
              alt="Abdullah Al Mamun"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 bg-[var(--ec-primary)]"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-[var(--ec-gray-300)] mb-1">
          Abdullah Al Mamun
        </h3>

        <p className="text-[var(--ec-secondary)] font-bold tracking-wide uppercase text-sm mb-6">
          Visionary & Lead Developer
        </p>

        {/* Social Badge */}
        <a
          href="https://github.com/mamun-jsx"
          target="_blank"
          className="group flex items-center gap-3 px-6 py-3 bg-black rounded-full transition-all hover:bg-[var(--ec-primary)]"
        >
          <span className="text-white text-sm font-medium">
            Connect with me:
          </span>
          <span className="text-[var(--ec-accent)] font-bold group-hover:text-white transition-colors">
            github/mamun.jsx
          </span>
        </a>
      </div>
    </section>
  );
};

export default TeamSection;
