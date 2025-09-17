"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
// import { SpotlightPreview } from "@/components/Spooot"; // Adjust path as needed// import { Hero } from "@/components/Hero";
// import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const SpotlightPreview = dynamic(() =>
  import("@/components/Spooot").then(mod => mod.SpotlightPreview),
  { ssr: false }
);
const Grid = dynamic(() =>
  import("@/components/Grid").then(mod => mod.default),
  { ssr: false }
);

const Home = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />

          {/* About section */}
          <section id="about" className="pt-40 md:pt-0">
             <SpotlightPreview /> 
            <Grid /> 
          </section>

          {/* Projects section */}
          <section id="projects">
            
            <RecentProjects />
          </section>

          {/* Testimonials section */}
          <section id="testimonials">
            <Clients />
          </section>

          {/* Experience (you could attach to 'about' or keep separate) */}
          <Experience />

          {/* Approach section */}
          <Approach />

          {/* Contact section */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
