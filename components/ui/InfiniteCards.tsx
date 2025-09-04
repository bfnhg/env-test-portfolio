"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

export const InfiniteMovingCards = ({
  items,
  className,
  scrollerRef,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  className?: string;
  scrollerRef?: React.RefObject<HTMLUListElement>;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef?.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });
    }
  }, [scrollerRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-x-auto overflow-y-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{ scrollSnapType: "x mandatory" }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 md:gap-16 py-4 w-max flex-nowrap"
        )}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[75vw] md:w-[45vw] flex-shrink-0 rounded-2xl overflow-hidden border border-slate-800 shadow-md flex flex-col md:flex-row"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md z-0"></div>
            <div className="md:w-[40%] h-44 md:h-auto overflow-hidden relative z-10">
              <img
                src={item.img}
                alt="Client work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col text-white md:w-[60%] min-h-[160px] relative z-10">
              <div className="flex items-center gap-3">
                <img src="/profile.svg" className="w-8 h-8 rounded-full" />
                <div>
                  <h3 className="font-bold text-sm">{item.name}</h3>
                  <p className="text-xs text-white/60">{item.title}</p>
                </div>
              </div>
              <div className="border-t border-white/20 my-3"></div>
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