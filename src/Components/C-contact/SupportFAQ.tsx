const SupportFAQ = () => (
  <section className="py-20 px-6 text-center max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-[var(--ec-primary)] mb-6">
      Need Instant Help?
    </h2>
    <p className="text-[var(--ec-gray-300)] mb-10">
      Check our Help Center for quick answers about ticket refunds, event
      transfers, and organizer tools.
    </p>

    <div className="inline-flex flex-wrap justify-center gap-4">
      <button className="px-8 py-3 bg-[var(--ec-secondary)] text-white font-bold rounded-full hover:scale-105 transition-transform">
        View Help Center
      </button>
      <button className="px-8 py-3 border-2 border-[var(--ec-primary)] text-[var(--ec-primary)] font-bold rounded-full hover:bg-[var(--ec-primary)] hover:text-white transition-all">
        Ticket Support
      </button>
    </div>
  </section>
);

export default SupportFAQ;
