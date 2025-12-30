"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export const FloatingNav = ({ navItems, className }: { navItems: any[]; className?: string }) => {
  const { scrollYProgress } = useScroll();
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.02) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        className={cn(
          "flex max-w-fit fixed z-[99999] top-4 inset-x-0 mx-auto px-6 py-2.5 rounded-full border border-white/10 shadow-2xl items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(12px) saturate(150%)",
          backgroundColor: "rgba(10, 10, 15, 0.7)",
        }}
      >
        {navItems.map((item, idx) => (
          <Link key={idx} href={item.link} className="text-white text-xs md:text-sm hover:text-blue-400 transition-colors px-2">
            {t(item.name)}
          </Link>
        ))}
        
        <select 
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-transparent text-white text-xs md:text-sm border border-white/20 px-3 py-1.5 rounded-full cursor-pointer hover:border-white/40 transition-colors"
        >
          <option value="en" style={{ backgroundColor: "#0a0a0f", color: "white" }}>English</option>
          <option value="fr" style={{ backgroundColor: "#0a0a0f", color: "white" }}>Français</option>
          {/* <option value="ar" style={{ backgroundColor: "#0a0a0f", color: "white" }}>العربية</option> */}
        </select>
      </motion.div>
    </AnimatePresence>
  );
};