import CompanyCollaboration from "@/Components/CompanyCollaboration";
import FeatureEvent from "@/Components/FeatureEvent";
import HomeHero from "@/Components/HeroSection";
import JoinEventCTA from "@/Components/JoinEventCTA";
import OurProcess from "@/Components/OurProcess";
import { getAllEvents } from "@/action/user";

export default async function HomePage() {
  const events = await getAllEvents();
  return (
    <div>
      <HomeHero />
      <FeatureEvent allEvents={events} />
      <CompanyCollaboration />
      <OurProcess />
      <JoinEventCTA />
    </div>
  );
}
