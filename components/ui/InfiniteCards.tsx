"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
<li
  key={idx}
  className="relative w-[75vw] md:w-[45vw] flex-shrink-0 rounded-2xl overflow-hidden border border-slate-800 shadow-md flex flex-col md:flex-row"
>
  {/* Overlay dégradé sur toute la card */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md z-0"></div>

  {/* Image */}
  <div className="md:w-[40%] h-44 md:h-auto overflow-hidden relative z-10">
    <img
      src={item.img}
      alt="Client work"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Texte */}
  <div className="p-4 flex flex-col text-white md:w-[60%] min-h-[160px] relative z-10">
    {/* Haut : profil + nom + titre */}
    <div className="flex items-center gap-3">
      <img src="/profile.svg" className="w-8 h-8 rounded-full" />
      <div>
        <h3 className="font-bold text-sm">{item.name}</h3>
        <p className="text-xs text-white/60">{item.title}</p>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-white/20 my-3"></div>

    {/* Bas : quote */}
    <blockquote className="text-sm font-medium leading-relaxed">
      {item.quote}
    </blockquote>
  </div>
</li>






        ))}
      </ul>
    </div>
  );
};
