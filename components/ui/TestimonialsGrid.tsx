"use client"

import { cn } from "@/lib/utils"
import React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

export const TestimonialsGrid = ({
  items,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
    img: string
  }[]
  className?: string
}) => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className="group relative"
        >
          <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800/50 overflow-hidden transition-all duration-500 hover:border-purple/50 hover:shadow-2xl hover:shadow-purple/20 hover:-translate-y-2">
            
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Quote icon */}
            <div className="absolute top-4 right-4 text-purple/30 group-hover:text-purple/60 transition-colors duration-300">
              <FaQuoteLeft className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col">
              
              {/* Client image and info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={item.img || "/placeholder.svg"} 
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-700 group-hover:border-purple/50 transition-colors duration-300"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple to-blue rounded-full flex items-center justify-center">
                    <FaStar className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-white group-hover:text-purple transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {t(item.title)}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 flex items-center">
                <blockquote className="text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed text-base italic">
                  &ldquo;{t(item.quote)}&rdquo;
                </blockquote>
              </div>

              {/* Decorative line */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-purple/50 transition-colors duration-500"></div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
