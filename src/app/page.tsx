import { Navbar, Footer } from "@/components";
import Hero from "./sections/hero";
import MissionSection from "./sections/mission";
import ImpactSection from "./sections/impact";
import HelpSection from "./sections/help";
import GallerySection from "./sections/gallery";
import ContactSection from "./sections/contact";
import Faq from "./sections/faq";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionSection />
      <ImpactSection />
      <GallerySection />
      <HelpSection />
      <ContactSection />
      <Faq />
      <Footer />
    </>
  );
}
