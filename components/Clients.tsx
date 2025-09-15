"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import Image from "next/image"

import { companies, testimonials } from "@/data"
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials"

const Clients = () => {
  const { t } = useTranslation()

  const mappedTestimonials = testimonials.map((item) => ({
    quote: t(item.quote),
    name: item.name,
    designation: t(item.title),
    src: item.img,
  }))

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t("Kind words from")}
        <span className="text-purple"> {t("satisfied clients")}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <AnimatedTestimonials testimonials={mappedTestimonials} />

        {/* Spacing */}
        <div className="my-16"></div>

        {/* Companies logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <Image 
                  src={company.img || "/placeholder.svg"} 
                  alt={company.name} 
                  width={20}
                  height={20}
                  className="md:w-10 w-5" 
                  loading="lazy"
                />
                <Image
                  src={company.nameImg || "/placeholder.svg"}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={40}
                  className="md:w-24 w-20"
                  loading="lazy"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
