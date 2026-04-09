"use client";

const AboutHeroSection = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[var(--ec-primary)] via-[var(--ec-accent)] to-[var(--ec-secondary)] text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://transparenttextures.com')]"></div>
      <h1 className="text-5xl md:text-7xl font-extrabold z-10 drop-shadow-lg">
        EventCircle
      </h1>
      <p className="mt-4 text-xl md:text-2xl max-w-2xl z-10 font-light opacity-90">
        The heartbeat of seamless event management and instant ticketing.
      </p>
    </section>
  );
};

export default AboutHeroSection;
