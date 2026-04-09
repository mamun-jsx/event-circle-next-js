const ContactHero = () => (
  <section className="relative py-20 px-6 bg-white overflow-hidden text-center">
    {/* Tricky Color: Floating background blur */}
    <div className="absolute top-0 -left-20 w-72 h-72 bg-[var(--ec-primary)]/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[var(--ec-accent)]/10 rounded-full blur-3xl"></div>

    <div className="relative z-10">
      <h1 className="text-5xl md:text-7xl font-black text-[var(--ec-primary)] tracking-tight">
        Get in <span className="text-[var(--ec-accent)]">Touch</span>
      </h1>
      <p className="mt-4 text-[var(--ec-gray-200)] text-lg max-w-xl mx-auto">
        Have an event in mind? Let's make it a reality. Our team is here to help
        you every step of the way.
      </p>
    </div>
  </section>
);

export default ContactHero;
