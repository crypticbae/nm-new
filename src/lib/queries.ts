// GROQ Queries für Neon Murer AG Content

// Basis-Felder für Bilder
const imageFields = `
  image {
    asset->{
      _id,
      url
    },
    alt
  }
`

// Service Pages (Lichtwerbung, Beschriftungen, etc.)
export const servicePageQuery = `
  *[_type == "servicePage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    content,
    images[] {
      ${imageFields}
    },
    features,
    price,
    ctaText,
    seo {
      title,
      description,
      keywords
    }
  }
`

export const allServicePagesQuery = `
  *[_type == "servicePage"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    category,
    ${imageFields},
    order
  }
`

export const servicesByCategoryQuery = `
  *[_type == "servicePage" && category == $category] | order(order asc) {
    _id,
    title,
    slug,
    description,
    ${imageFields},
    features,
    price
  }
`

// Team Members für "Über uns" > Kontaktpersonen
export const teamMembersQuery = `
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    department,
    email,
    phone,
    ${imageFields},
    bio,
    order
  }
`

export const teamMemberQuery = `
  *[_type == "teamMember" && _id == $id][0] {
    _id,
    name,
    position,
    department,
    email,
    phone,
    ${imageFields},
    bio
  }
`

// Company History für "Über uns" > Firmengeschichte
export const companyHistoryQuery = `
  *[_type == "companyHistory"] | order(year asc) {
    _id,
    year,
    title,
    description,
    image {
      ${imageFields}
    },
    milestone
  }
`

// Competencies für "Über uns" > Fachkompetenzen
export const competenciesQuery = `
  *[_type == "competency"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    ${imageFields},
    details,
    order
  }
`

// Job Offers für "Über uns" > Stellenangebote
export const jobOffersQuery = `
  *[_type == "jobOffer" && active == true] | order(_createdAt desc) {
    _id,
    title,
    department,
    location,
    type,
    description,
    requirements,
    benefits,
    salary,
    contactPerson,
    active
  }
`

export const jobOfferQuery = `
  *[_type == "jobOffer" && _id == $id][0] {
    _id,
    title,
    department,
    location,
    type,
    description,
    requirements,
    benefits,
    salary,
    contactPerson,
    active
  }
`

// Homepage Content
export const homepageQuery = `
  *[_type == "homepage"][0] {
    _id,
    hero {
      title,
      subtitle,
      ${imageFields},
      ctaText,
      ctaLink
    },
    services[] {
      title,
      description,
      ${imageFields},
      link
    },
    about {
      title,
      description,
      ${imageFields}
    },
    stats[] {
      label,
      value,
      suffix
    },
    testimonials[] {
      text,
      author,
      company,
      ${imageFields}
    }
  }
`

// Navigation / Menu
export const navigationQuery = `
  *[_type == "navigation"][0] {
    _id,
    mainMenu[] {
      title,
      link,
      subItems[] {
        title,
        link,
        description
      }
    },
    footerMenu[] {
      title,
      links[] {
        title,
        link
      }
    }
  }
`

// Site Settings
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    title,
    description,
    keywords,
    logo {
      ${imageFields}
    },
    favicon {
      ${imageFields}
    },
    contact {
      company,
      address,
      phone,
      email,
      website,
      socialMedia[] {
        platform,
        url
      }
    },
    seo {
      defaultTitle,
      defaultDescription,
      defaultImage {
        ${imageFields}
      }
    }
  }
`

// Gallery Images für Service-Seiten
export const galleryQuery = `
  *[_type == "gallery" && category == $category] {
    _id,
    title,
    category,
    images[] {
      ${imageFields}
    }
  }
`

// Blog Posts (optional für News/Updates)
export const blogPostsQuery = `
  *[_type == "blogPost" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    ${imageFields},
    publishedAt,
    author->{
      name,
      ${imageFields}
    },
    categories[]->{ 
      title,
      slug
    }
  }
`

export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    excerpt,
    ${imageFields},
    publishedAt,
    author->{
      name,
      bio,
      ${imageFields}
    },
    categories[]->{ 
      title,
      slug
    },
    seo {
      title,
      description,
      keywords
    }
  }
` 