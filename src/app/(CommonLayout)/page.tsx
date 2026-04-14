import FeatureEvent from "@/Components/FeatureEvent";
import HomeHero from "@/Components/HeroSection";
import { getAllEvents } from "@/action/user";

export default async function HomePage() {
  const events = await getAllEvents();
  return (
    <div>
      <HomeHero />
      <FeatureEvent allEvents={events} />
    </div>
  );
}
