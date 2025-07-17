import { PortableText as BasePortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

// Custom Components für Portable Text
const components = {
  // Block-level elements
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-[#112357] mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-[#112357] mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold text-[#112357] mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-semibold text-[#112357] mb-2">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#ffd401] pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },

  // List elements
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },

  // List items
  listItem: {
    bullet: ({ children }: any) => <li className="ml-4">{children}</li>,
    number: ({ children }: any) => <li className="ml-4">{children}</li>,
  },

  // Marks (inline formatting)
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-[#112357]">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-gray-600">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined
      
      return (
        <Link 
          href={value?.href}
          target={target}
          rel={rel}
          className="text-[#112357] hover:text-[#ffd401] underline transition-colors"
        >
          {children}
        </Link>
      )
    },
    highlight: ({ children }: any) => (
      <mark className="bg-[#ffd401] px-1 py-0.5 rounded">{children}</mark>
    ),
  },

  // Custom types
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null
      
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(800).height(600).url()}
            alt={value.alt || 'Neon Murer AG'}
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {value.caption && (
            <p className="text-sm text-gray-500 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },

    youtube: ({ value }: any) => {
      if (!value?.url) return null
      
      return (
        <div className="my-8">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(value.url)}`}
              title="YouTube Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )
    },

    callToAction: ({ value }: any) => {
      return (
        <div className="my-8 p-6 bg-gradient-to-r from-[#112357] to-[#1a3a6b] rounded-lg text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
          <p className="text-gray-100 mb-6">{value.description}</p>
          <Link
            href={value.link || '/kontakt'}
            className="inline-block bg-[#ffd401] text-[#112357] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            {value.buttonText || 'Jetzt anfragen'}
          </Link>
        </div>
      )
    },

    gallery: ({ value }: any) => {
      if (!value?.images?.length) return null
      
      return (
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {value.images.map((image: any, index: number) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={urlFor(image).width(400).height(400).url()}
                  alt={image.alt || `Galerie Bild ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )
    },
  },
}

// Helper function to extract YouTube ID
function getYouTubeId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : ''
}

// Main PortableText Component
interface PortableTextProps {
  content: any[]
  className?: string
}

export default function PortableText({ content, className = '' }: PortableTextProps) {
  if (!content || !Array.isArray(content)) {
    return null
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <BasePortableText value={content} components={components} />
    </div>
  )
}

// Styled variants
export function PortableTextCompact({ content, className = '' }: PortableTextProps) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <BasePortableText value={content} components={components} />
    </div>
  )
}

export function PortableTextLarge({ content, className = '' }: PortableTextProps) {
  return (
    <div className={`prose prose-xl max-w-none ${className}`}>
      <BasePortableText value={content} components={components} />
    </div>
  )
} 