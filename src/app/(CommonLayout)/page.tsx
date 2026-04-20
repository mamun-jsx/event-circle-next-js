import CompanyCollaboration from "@/Components/CompanyCollaboration";
import FeatureEvent from "@/Components/FeatureEvent";
import HomeHero from "@/Components/HeroSection";
import JoinEventCTA from "@/Components/JoinEventCTA";
import OurProcess from "@/Components/OurProcess";
import { getAllEvents } from "@/action/user";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const response = await getAllEvents();
  const events = response?.data || [];
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
