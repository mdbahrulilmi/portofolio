import ContactCTA from "./home/cta/page";
import Hero from "./home/hero/hero";
import Services from "./home/services/page";
import TechStack from "./home/techstack/page";
import Workflow from "./home/workflow/workflow";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services />
      <Workflow />
      <TechStack />
      <ContactCTA />
    </>
  );
}
