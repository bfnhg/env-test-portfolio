"use client"

import { cn } from "@/lib/utils"
import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"

export const TestimonialsCarousel = ({
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, items.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    setIsAutoPlaying(false)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  }

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-slate-900/90 backdrop-blur-md border border-slate-800/50">
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all duration-200 backdrop-blur-sm border border-white/20"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Slides Container */}
        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={currentIndex}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0 flex items-center justify-center p-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-3xl">
                
                {/* Client Image */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src={items[currentIndex].img || "/placeholder.svg"} 
                      alt={items[currentIndex].name}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple to-blue rounded-full flex items-center justify-center shadow-lg">
                      <FaStar className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote Icon */}
                  <div className="flex justify-center md:justify-start mb-4">
                    <FaQuoteLeft className="w-8 h-8 text-purple/60" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 italic">
                    &ldquo;{t(items[currentIndex].quote)}&rdquo;
                  </blockquote>

                  {/* Client Info */}
                  <div className="border-t border-slate-600 pt-4">
                    <h3 className="font-bold text-xl text-white mb-1">
                      {items[currentIndex].name}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base">
                      {t(items[currentIndex].title)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-purple to-blue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-gradient-to-r from-purple to-blue scale-125 shadow-lg shadow-purple/50"
                : "bg-slate-600 hover:bg-slate-500"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={cn(
            "px-4 py-2 rounded-full text-sm transition-all duration-200",
            isAutoPlaying
              ? "bg-purple/20 text-purple border border-purple/30"
              : "bg-slate-700/50 text-slate-300 border border-slate-600"
          )}
        >
          {isAutoPlaying ? "Pause" : "Play"} Auto
        </button>
      </div>
    </div>
  )
}
