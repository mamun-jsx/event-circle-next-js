"use client";

import FeaturesSection from "@/Components/C-about/FeaturesSection";
import AboutHeroSection from "@/Components/C-about/AboutHcomponent";
import MissionSection from "@/Components/C-about/MissionSection";
import TeamSection from "@/Components/C-about/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-(--ec-foreground) overflow-hidden">
     <AboutHeroSection />
      <MissionSection />
      <FeaturesSection />
      <TeamSection />
    </div>
  );
};

export default About;
