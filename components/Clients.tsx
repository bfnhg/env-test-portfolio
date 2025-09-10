"use client"

import React from "react"
import { useTranslation } from "react-i18next"

import { companies, testimonials } from "@/data"
import { TestimonialsGrid } from "./ui/TestimonialsGrid"

const Clients = () => {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {t("Kind words from")}
        <span className="text-purple"> {t("satisfied clients")}</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Testimonials Grid */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <TestimonialsGrid items={testimonials} />
        </div>

        {/* Spacing */}
        <div className="my-16"></div>

        {/* Companies logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img src={company.img || "/placeholder.svg"} alt={company.name} className="md:w-10 w-5" />
                <img
                  src={company.nameImg || "/placeholder.svg"}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
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
