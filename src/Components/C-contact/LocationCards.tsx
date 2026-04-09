const LocationCards = () => (
  <section className="py-16 bg-[var(--ec-gray-100)]/30 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Main Office", city: "Gulshan, Dhaka", icon: "🏢" },
        { title: "Ticketing Hub", city: "Banani, Dhaka", icon: "🎟️" },
        { title: "Creative Studio", city: "Dhanmondi, Dhaka", icon: "🎨" },
      ].map((loc, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl border-l-4 border-[var(--ec-secondary)] hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">{loc.icon}</span>
          <h3 className="text-xl font-bold text-[var(--ec-primary)]">
            {loc.title}
          </h3>
          <p className="text-[var(--ec-gray-200)] mt-2">{loc.city}</p>
          <button className="mt-4 text-sm font-bold text-[var(--ec-accent)] hover:underline">
            Get Directions →
          </button>
        </div>
      ))}
    </div>
  </section>
);
export default LocationCards