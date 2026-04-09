const MissionSection = () => (
  <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="order-2 md:order-1">
      <h2 className="text-3xl font-bold text-[var(--ec-primary)] border-l-4 border-[var(--ec-accent)] pl-4">
        Our Mission
      </h2>
      <p className="mt-6 text-[var(--ec-gray-300)] leading-relaxed">
        At EventCircle, we believe every moment matters. We've built a platform
        that bridges the gap between organizers and attendees, making ticket
        sales as exciting as the event itself. From local workshops to global
        concerts, we power the pulse of your community.
      </p>
    </div>
    <div className="order-1 md:order-2 bg-[var(--ec-gray-100)] h-64 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center italic text-[var(--ec-secondary)] font-bold">
      <img src="/event-management-hero.jpg" alt="" />
    </div>
  </section>
);

export default MissionSection;
