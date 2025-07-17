import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Sanity Client-Konfiguration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

// Image URL Builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// GROQ Query Helper
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: any
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })
}

// Content-Typen für TypeScript
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface PortableTextBlock {
  _type: 'block'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  markDefs?: any[]
  style?: string
}

// Neon Murer spezifische Content-Typen
export interface ServicePage {
  _id: string
  _type: string
  title: string
  slug: { current: string }
  description: string
  content: PortableTextBlock[]
  images: SanityImage[]
  features: string[]
  price?: string
  ctaText?: string
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface TeamMember {
  _id: string
  name: string
  position: string
  department: string
  email?: string
  phone?: string
  image: SanityImage
  bio: PortableTextBlock[]
}

export interface CompanyHistory {
  _id: string
  year: number
  title: string
  description: string
  image?: SanityImage
  milestone: boolean
}

export interface Competency {
  _id: string
  title: string
  description: string
  icon: string
  image: SanityImage
  details: PortableTextBlock[]
}

export interface JobOffer {
  _id: string
  title: string
  department: string
  location: string
  type: 'fulltime' | 'parttime' | 'apprentice'
  description: PortableTextBlock[]
  requirements: string[]
  benefits: string[]
  salary?: string
  contactPerson: string
  active: boolean
} 