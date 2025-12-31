"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar").then(mod => mod.FloatingNav), { ssr: false });

const SpotlightPreview = dynamic(() => import("@/components/Spooot").then(mod => mod.SpotlightPreview), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black-100" />,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="min-h-[600px] bg-neutral-900/30 animate-pulse" />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects").then(mod => mod.default), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients").then(mod => mod.default), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience").then(mod => mod.default), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach").then(mod => mod.default), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.default), { ssr: false });

const SectionSkeleton = () => <div className="min-h-[600px] bg-neutral-900/30 animate-pulse rounded-xl my-20" />;

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <Suspense fallback={null}>
        <FloatingNav navItems={navItems} />
      </Suspense>

      <div className="max-w-7xl w-full">
        <section id="about">
          <Suspense fallback={<div className="min-h-screen bg-black-100" />}>
            <SpotlightPreview />
          </Suspense>
          <Suspense fallback={<div className="min-h-[600px] bg-neutral-900/30 animate-pulse" />}>
            <div className="relative z-20 -mt-24 sm:-mt-32 md:-mt-40">
              <Grid />
            </div>
          </Suspense>
        </section>

        <Suspense fallback={<SectionSkeleton />}>
          <section id="projects"><RecentProjects /></section>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <section id="testimonials"><Clients /></section>
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
          <Approach />
          <Contact />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
}