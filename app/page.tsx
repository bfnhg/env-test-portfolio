"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const SectionSkeleton = () => (
  <div className="w-full min-h-[400px] bg-gradient-to-b from-black-100 to-black animate-pulse rounded-lg" />
);

// FIX: Move this to the top level
const FloatingNav = dynamic(() =>
  import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav),
  { ssr: false }
);

const SpotlightPreview = dynamic(() => import("@/components/Spooot").then(mod => mod.SpotlightPreview), { ssr: false, loading: () => <SectionSkeleton /> });
const Grid = dynamic(() => import("@/components/Grid").then(mod => mod.default), { ssr: false, loading: () => <SectionSkeleton /> });
const RecentProjectsLazy = dynamic(() => import("@/components/RecentProjects").then(mod => mod.default), { ssr: false });
const ClientsLazy = dynamic(() => import("@/components/Clients").then(mod => mod.default), { ssr: false });
const ExperienceLazy = dynamic(() => import("@/components/Experience").then(mod => mod.default), { ssr: false });
const ApproachLazy = dynamic(() => import("@/components/Approach").then(mod => mod.default), { ssr: false });
const ContactLazy = dynamic(() => import("@/components/Contact").then(mod => mod.default), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* FIX: FloatingNav is now a direct child of main with a 
          high z-index to stay above everything else 
      */}
      <Suspense fallback={null}>
        <FloatingNav navItems={navItems} />
      </Suspense>

      <div className="max-w-7xl w-full">
        <section id="about" className="w-full">
          <Suspense fallback={<SectionSkeleton />}>
            <SpotlightPreview /> 
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Grid /> 
          </Suspense>
        </section>

        <section id="projects">
          <Suspense fallback={<SectionSkeleton />}>
            <RecentProjectsLazy />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionSkeleton />}>
            <ClientsLazy />
          </Suspense>
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <ExperienceLazy />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ApproachLazy />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ContactLazy />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
};

export default Home;