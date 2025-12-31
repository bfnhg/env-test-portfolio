"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { SpotlightPreview } from "@/components/Spooot";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

// Tu peux garder un petit skeleton global si tu veux, mais ce n'est plus obligatoire
const LoadingSection = () => (
  <div className="w-full min-h-[600px] bg-gradient-to-b from-black-100 to-black animate-pulse rounded-lg" />
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      {/* FloatingNav chargé immédiatement */}
      <FloatingNav navItems={navItems} />

      <div className="max-w-7xl w-full">
        <section id="about" className="w-full flex flex-col">
          {/* Plus de Suspense ni dynamic → chargement direct */}
          <SpotlightPreview />

          <div className="relative z-20 -mt-24 sm:-mt-32 md:-mt-40">
            <Grid />
          </div>
        </section>

        <section id="projects">
          <RecentProjects />
        </section>

        <section id="testimonials">
          <Clients />
        </section>

        <Experience />

        <Approach />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}