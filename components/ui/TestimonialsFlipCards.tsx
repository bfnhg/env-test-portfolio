"use client"

import { cn } from "@/lib/utils"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { FaQuoteLeft, FaStar, FaFlipHorizontal, FaUser } from "react-icons/fa"

export const TestimonialsFlipCards = ({
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
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

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
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, idx) => {
        const isFlipped = flippedCards.has(idx)
        
        return (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="group relative h-80 perspective-1000"
          >
            <motion.div
              className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              onClick={() => toggleFlip(idx)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Front of card - Image side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden">
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md border border-slate-800/50">
                  
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.img || "/placeholder.svg"} 
                      alt={item.name}
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80"></div>
                  </div>

                  {/* Overlay content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Profile image */}
                    <div className="relative mb-4">
                      <img 
                        src={item.img || "/placeholder.svg"} 
                        alt={item.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple to-blue rounded-full flex items-center justify-center">
                        <FaStar className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Name and title */}
                    <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {t(item.title)}
                    </p>

                    {/* Flip indicator */}
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-purple transition-colors duration-300">
                      <FaFlipHorizontal className="w-4 h-4" />
                      <span className="text-xs">Click to read testimonial</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/5 via-transparent to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>

              {/* Back of card - Testimonial side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden rotate-y-180">
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md border border-purple/30">
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple to-blue rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue to-purple rounded-full blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-6">
                    
                    {/* Quote icon */}
                    <div className="flex justify-center mb-4">
                      <FaQuoteLeft className="w-8 h-8 text-purple/60" />
                    </div>

                    {/* Quote */}
                    <div className="flex-1 flex items-center">
                      <blockquote className="text-white/90 text-center leading-relaxed italic text-sm">
                        &ldquo;{t(item.quote)}&rdquo;
                      </blockquote>
                    </div>

                    {/* Client info */}
                    <div className="mt-4 pt-4 border-t border-slate-600/50">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.img || "/placeholder.svg"} 
                          alt={item.name}
                          className="w-8 h-8 rounded-full object-cover border border-slate-600"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-white truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-white/60 truncate">
                            {t(item.title)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Flip back indicator */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-white/50 text-xs">
                      <FaUser className="w-3 h-3" />
                      <span>Click to see profile</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/10 via-transparent to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
