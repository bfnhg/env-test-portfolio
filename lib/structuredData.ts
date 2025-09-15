export const generatePersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Adham Ait Reqba",
    "jobTitle": "Software Engineer",
    "description": "Passionate Software Engineer specializing in creating dynamic and responsive web applications using React, Next.js, and modern web technologies.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/profile.jpg`,
    "sameAs": [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA",
      "addressLocality": "Morocco"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Software Engineering"
    ],
    "alumniOf": "Your University/Institution",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  }
}

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Adham Ait Reqba Portfolio",
    "description": "Software Engineer Portfolio showcasing projects, skills, and experience in modern web development.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "author": {
      "@type": "Person",
      "name": "Adham Ait Reqba"
    },
    "inLanguage": ["en", "fr"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

export const generatePortfolioStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Adham Ait Reqba Portfolio",
    "description": "A comprehensive portfolio showcasing software engineering projects, skills, and professional experience.",
    "creator": {
      "@type": "Person",
      "name": "Adham Ait Reqba"
    },
    "dateCreated": "2024",
    "genre": "Portfolio",
    "inLanguage": ["en", "fr"],
    "keywords": "portfolio, software engineer, web development, react, next.js"
  }
}
