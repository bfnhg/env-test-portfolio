import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import Link from "next/link";
import ContactPopup from "./ContactPopup"; // 👈 import here



export function Hero() {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight className="top-0 left-0 md:left-80" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-6 pt-24 md:pt-0">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Picture */}
          <div className="relative">
            <div className="h-48 w-48 md:h-60 md:w-60 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-600 p-2">
              <Image
                src="/img/add.jpeg"
                alt="Profile"
                width={240}
                height={240}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-2">
              <div className="rounded-full bg-black p-3">
                <svg
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center">
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl mt-2">
              Hey, I'm Adham
            </h2>
            <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-5xl font-bold text-transparent md:text-7xl mt-2">
              a Software Engineer
            </h3>
            <div className="mt-3 flex items-center justify-center space-x-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-neutral-400"></div>
              <p className="text-xl font-medium text-neutral-300 md:text-2xl">
                JS Master
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-neutral-400"></div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl text-center">
            <p className="text-lg font-normal leading-relaxed text-neutral-300 md:text-xl">
              Passionate about crafting exceptional user experiences through modern web technologies.
              I transform ideas into interactive, responsive, and performant web applications.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            {['React', 'Next', 'JavaScript', 'TypeScript', 'Vue.js', 'Node.js', 'Dotnet', 'Python'].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-neutral-800 px-4 py-2 text-base font-medium text-neutral-300 border border-neutral-700 hover:border-neutral-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex space-x-6">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                View Projects
              </span>
            </button>
            {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Contact Me
              </span>
            </button> */}
             {/* Contact Me Button */}
    {/* Contact Me Popup */}
  <ContactPopup />
          </div>
        </div>
      </div>
    </>
  );
}