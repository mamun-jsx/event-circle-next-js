const FeaturesSection = () => (
  <section className="py-16 bg-[var(--ec-gray-100)]/30 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          t: "Fast Ticketing",
          d: "Secure your spot in seconds with our lightning-fast checkout.",
          c: "var(--ec-accent)",
        },
        {
          t: "Verified Events",
          d: "Every event is hand-checked for quality and authenticity.",
          c: "var(--ec-secondary)",
        },
        {
          t: "Easy Hosting",
          d: "Tools to manage your crowd and track revenue in real-time.",
          c: "var(--ec-primary)",
        },
      ].map((f, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-sm border-b-4 transition-transform hover:-translate-y-2"
          style={{ borderColor: f.c }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: f.c }}>
            {f.t}
          </h3>
          <p className="text-[var(--ec-gray-200)] text-sm">{f.d}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
