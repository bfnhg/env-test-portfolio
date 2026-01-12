"use client";

import dynamic from "next/dynamic";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const PinContainer = dynamic(
  () => import("./ui/Pin").then((mod) => mod.PinContainer),
  {
    ssr: false,
    loading: () => (
      <div className="w-full min-h-[480px] bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl animate-pulse flex items-center justify-center backdrop-blur-sm border border-white/10">
        <span className="text-slate-300">Chargement...</span>
      </div>
    ),
  }
);

export default function RecentProjects() {
  const { t } = useTranslation();

  return (
    <div className="py-24 relative overflow-hidden">
      {/* Effet de fond luxueux */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Titre avec effet premium */}
      <div className="text-center mb-32 lg:mb-40 relative z-10">
        
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent inline-block mb-2">
            {t("A small selection of")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent inline-block">
            {t("recent projects")}
          </span>
        </h1>
        <br></br>
         <br></br>
        
      </div>
     

      {/* Grille de projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 lg:gap-y-20 xl:gap-x-20 xl:gap-y-24 px-4 md:px-8 max-w-[1650px] mx-auto relative z-10">
        {projects.map((item, idx) => (
          <div
            key={item.id}
            className="w-full flex flex-col group/card min-h-[600px] lg:min-h-[700px]"
            style={{
              animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
            }}
          >
            <PinContainer title={t(item.title)} className="flex flex-col h-full w-full">
              {/* Card wrapper avec effet de verre */}
              <div className="relative w-full h-full min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 group-hover/card:border-purple-500/30 transition-all duration-500 flex flex-col">
                
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                
                {/* Image premium */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/50 z-10" />
                  
                  <Image
                    src={item.img}
                    alt={`${t(item.title)} — Aperçu du projet`}
                    fill
                    priority={item.id === 1}
                    quality={95}
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 600px, 680px"
                    className="object-cover transition-all duration-700 ease-out group-hover/card:scale-105 group-hover/card:brightness-110"
                  />
                  
                  {/* Badge premium */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <div className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-lg">
                      ✨ Premium
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="relative z-10 p-8 flex flex-col flex-grow">
                  {/* Titre avec effet gradient */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent line-clamp-1">
                    {t(item.title)}
                  </h2>

                  {/* Description élégante */}
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed line-clamp-3 mb-8 flex-grow">
                    {t(item.des)}
                  </p>

                  {/* Divider luxueux */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                  {/* Footer premium */}
                  <div className="flex items-center justify-between">
                    {/* Stack technologique */}
                    <div className="flex items-center -space-x-3">
                      {(item.techIcons ?? []).map((icon, index) => (
                        <div
                          key={`${icon.name}-${index}`}
                          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 flex items-center justify-center shadow-lg hover:scale-110 hover:z-10 transition-all duration-300 hover:border-purple-500/50"
                          title={icon.name}
                          style={{
                            background: icon.color ? `linear-gradient(135deg, ${icon.color}15, ${icon.color}05)` : undefined,
                          }}
                        >
                          <img
                            src={icon.src}
                            alt={icon.name}
                            className="w-6 h-6"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    {/* CTA premium */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 group/btn overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">{t("Live demo")}</span>
                      <FaLocationArrow className="relative z-10 text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}