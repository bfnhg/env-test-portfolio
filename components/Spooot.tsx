"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function SpotlightPreview() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="relative flex w-full flex-col items-center overflow-hidden rounded-md antialiased min-h-screen">
      {/* Grille de fond */}
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />
      
      <Spotlight className="-top-60 left-0 md:-top-40 md:left-80" fill="white" />

      {/* Conteneur principal avec marge haute pour passer sous la nav */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 mt-24 md:mt-28 flex flex-col items-center">
        <div className="flex flex-col items-center space-y-6">
          
          {/* L'image de profil apparaîtra ici, pile sous la Navbar */}
          <div className="relative flex justify-center items-center">
            <div className="h-44 w-44 md:h-60 md:w-60 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-600 p-[2px]">
              <Image
                src="/img/moi.webp"
                alt="Profile"
                width={240}
                height={240}
                priority
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            {/* Badge Star */}
            <div className="absolute -bottom-2 -right-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1.5">
              <div className="rounded-full bg-black p-2 md:p-3">
                <svg className="h-4 w-4 md:h-6 md:w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Titres */}
          <div className="text-center max-w-4xl">
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
              {t("Hey, I'm Adham")}
            </h2>
            <h3 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-2xl font-bold text-transparent md:text-5xl mt-2">
              {t("a Software Engineer, Based in Morocco")} 🇲🇦
            </h3>
          </div>

          <button
            onClick={() => router.push("/#projects")}
            className="mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {t("View Projects")}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}