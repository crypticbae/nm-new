// API Helper-Funktionen für Sanity CMS
import { sanityFetch } from './sanity'
import type { 
  ServicePage, 
  TeamMember, 
  CompanyHistory, 
  Competency, 
  JobOffer 
} from './sanity'
import {
  servicePageQuery,
  allServicePagesQuery,
  servicesByCategoryQuery,
  teamMembersQuery,
  teamMemberQuery,
  companyHistoryQuery,
  competenciesQuery,
  jobOffersQuery,
  jobOfferQuery,
  homepageQuery,
  navigationQuery,
  siteSettingsQuery,
  galleryQuery
} from './queries'

// Service Pages API
export async function getServicePage(slug: string): Promise<ServicePage | null> {
  try {
    return await sanityFetch<ServicePage>({
      query: servicePageQuery,
      params: { slug },
      tags: ['servicePage'],
    })
  } catch (error) {
    console.error('Error fetching service page:', error)
    return null
  }
}

export async function getAllServicePages(): Promise<ServicePage[]> {
  try {
    return await sanityFetch<ServicePage[]>({
      query: allServicePagesQuery,
      tags: ['servicePage'],
    })
  } catch (error) {
    console.error('Error fetching service pages:', error)
    return []
  }
}

export async function getServicesByCategory(category: string): Promise<ServicePage[]> {
  try {
    return await sanityFetch<ServicePage[]>({
      query: servicesByCategoryQuery,
      params: { category },
      tags: ['servicePage'],
    })
  } catch (error) {
    console.error('Error fetching services by category:', error)
    return []
  }
}

// Team Members API
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    return await sanityFetch<TeamMember[]>({
      query: teamMembersQuery,
      tags: ['teamMember'],
    })
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getTeamMember(id: string): Promise<TeamMember | null> {
  try {
    return await sanityFetch<TeamMember>({
      query: teamMemberQuery,
      params: { id },
      tags: ['teamMember'],
    })
  } catch (error) {
    console.error('Error fetching team member:', error)
    return null
  }
}

// Company History API
export async function getCompanyHistory(): Promise<CompanyHistory[]> {
  try {
    return await sanityFetch<CompanyHistory[]>({
      query: companyHistoryQuery,
      tags: ['companyHistory'],
    })
  } catch (error) {
    console.error('Error fetching company history:', error)
    return []
  }
}

// Competencies API
export async function getCompetencies(): Promise<Competency[]> {
  try {
    return await sanityFetch<Competency[]>({
      query: competenciesQuery,
      tags: ['competency'],
    })
  } catch (error) {
    console.error('Error fetching competencies:', error)
    return []
  }
}

// Job Offers API
export async function getJobOffers(): Promise<JobOffer[]> {
  try {
    return await sanityFetch<JobOffer[]>({
      query: jobOffersQuery,
      tags: ['jobOffer'],
    })
  } catch (error) {
    console.error('Error fetching job offers:', error)
    return []
  }
}

export async function getJobOffer(id: string): Promise<JobOffer | null> {
  try {
    return await sanityFetch<JobOffer>({
      query: jobOfferQuery,
      params: { id },
      tags: ['jobOffer'],
    })
  } catch (error) {
    console.error('Error fetching job offer:', error)
    return null
  }
}

// Homepage API
export async function getHomepage(): Promise<any> {
  try {
    return await sanityFetch({
      query: homepageQuery,
      tags: ['homepage'],
    })
  } catch (error) {
    console.error('Error fetching homepage:', error)
    return null
  }
}

// Navigation API
export async function getNavigation(): Promise<any> {
  try {
    return await sanityFetch({
      query: navigationQuery,
      tags: ['navigation'],
    })
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return null
  }
}

// Site Settings API
export async function getSiteSettings(): Promise<any> {
  try {
    return await sanityFetch({
      query: siteSettingsQuery,
      tags: ['siteSettings'],
    })
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

// Gallery API
export async function getGallery(category: string): Promise<any> {
  try {
    return await sanityFetch({
      query: galleryQuery,
      params: { category },
      tags: ['gallery'],
    })
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return []
  }
}

// Utility: Get optimized image URL
export function getImageUrl(image: any, options?: {
  width?: number
  height?: number
  quality?: number
  format?: 'webp' | 'jpg' | 'png'
}): string {
  if (!image?.asset?._ref) return ''
  
  const { width, height, quality = 80, format = 'webp' } = options || {}
  
  let url = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`
  
  const params = new URLSearchParams()
  if (width) params.append('w', width.toString())
  if (height) params.append('h', height.toString())
  if (quality) params.append('q', quality.toString())
  if (format) params.append('fm', format)
  
  return params.toString() ? `${url}?${params.toString()}` : url
}

// Cache-Revalidation für On-Demand ISR
export async function revalidateTag(tag: string): Promise<boolean> {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/revalidate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tag }),
    })
    return response.ok
  } catch (error) {
    console.error('Error revalidating tag:', error)
    return false
  }
} 