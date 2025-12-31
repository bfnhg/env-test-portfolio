"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export const FloatingNav = ({ navItems, className }: { navItems: any[]; className?: string }) => {
  const { scrollYProgress } = useScroll();
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Configuration des langues
  const languages = [
    { code: "en", label: "EN", fullLabel: "English", flag: "🇺🇸" },
    { code: "fr", label: "FR", fullLabel: "Français", flag: "🇫🇷" },
  ];

  // Détecter la langue actuelle
  const currentLanguage = languages.find((l) => l.code === i18n.language) || languages[0];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
        if (direction > 0) setIsOpen(false); // Ferme le menu au scroll
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "flex max-w-fit fixed z-[99999] top-4 sm:top-6 inset-x-0 mx-auto px-4 sm:px-6 py-2 rounded-2xl border border-white/[0.15] shadow-2xl items-center justify-center gap-3 sm:gap-8",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          background: "linear-gradient(135deg, rgba(10, 10, 15, 0.8) 0%, rgba(20, 20, 35, 0.6) 100%)",
        }}
      >
        {/* Liens de Navigation */}
        <div className="flex items-center gap-3 sm:gap-8">
          {navItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.link} 
              className="relative text-white text-[10px] sm:text-sm font-medium transition-all duration-300 hover:text-purple-400 group px-1"
            >
              {t(item.name)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-4 bg-white/20" />

        {/* SELECTEUR DE LANGUE STYLE SANS VIDE */}
        <div className="relative" onMouseLeave={() => setIsOpen(false)}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-purple-500/50 transition-all min-w-[60px] sm:min-w-[80px] justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs font-bold">{currentLanguage.label}</span>
              <span className="text-sm">{currentLanguage.flag}</span>
            </div>
            <motion.span 
              animate={{ rotate: isOpen ? 180 : 0 }} 
              className="text-[8px] opacity-40"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full right-0 mt-2 w-full min-w-[130px] p-1 rounded-xl border border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left transition-all mb-1 last:mb-0",
                      i18n.language === lang.code 
                        ? "bg-purple-600/30 text-purple-300 border border-purple-500/20" 
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {/* Drapeau */}
                    <span className="text-base leading-none">{lang.flag}</span>
                    
                    {/* Texte (Code + Nom complet) */}
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] sm:text-xs font-bold">{lang.label}</span>
                      <span className="text-[8px] opacity-40">{lang.fullLabel}</span>
                    </div>

                    {/* Checkmark discret si sélectionné */}
                    {i18n.language === lang.code && (
                      <div className="ml-auto w-1 h-1 rounded-full bg-purple-400" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};