"use client";

import ContactFormSection from "@/Components/C-contact/ContactFormSection";
import ContactHero from "@/Components/C-contact/ContactHero";
import LocationCards from "@/Components/C-contact/LocationCards";
import SupportFAQ from "@/Components/C-contact/SupportFAQ";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <ContactHero />
      <ContactFormSection />
      <LocationCards />
      <SupportFAQ />
    </div>
  );
};

export default Contact;
