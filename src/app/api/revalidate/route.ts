import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Verify secret to prevent unauthorized revalidation
    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const body = await request.json()
    const { tag, path, type } = body

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag)
      console.log(`🔄 Revalidated tag: ${tag}`)
    }

    // Revalidate by path
    if (path) {
      revalidatePath(path)
      console.log(`🔄 Revalidated path: ${path}`)
    }

    // Revalidate based on content type
    if (type) {
      switch (type) {
        case 'servicePage':
          revalidateTag('servicePage')
          revalidatePath('/lichtwerbung')
          revalidatePath('/beschriftungen')
          revalidatePath('/digital-signage')
          revalidatePath('/dienstleistungen')
          break
          
        case 'teamMember':
          revalidateTag('teamMember')
          revalidatePath('/ueber-uns/kontaktpersonen')
          break
          
        case 'companyHistory':
          revalidateTag('companyHistory')
          revalidatePath('/ueber-uns/firmengeschichte')
          break
          
        case 'competency':
          revalidateTag('competency')
          revalidatePath('/ueber-uns/fachkompetenzen')
          break
          
        case 'jobOffer':
          revalidateTag('jobOffer')
          revalidatePath('/ueber-uns/stellenangebote')
          break
          
        case 'homepage':
          revalidateTag('homepage')
          revalidatePath('/')
          break
          
        case 'navigation':
          revalidateTag('navigation')
          // Revalidate all pages as navigation affects everything
          revalidatePath('/', 'layout')
          break
          
        default:
          console.log(`Unknown content type: ${type}`)
      }
    }

    return NextResponse.json({ 
      message: 'Revalidation successful',
      revalidated: {
        tag: tag || null,
        path: path || null,
        type: type || null,
        timestamp: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { message: 'Error revalidating', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Handle GET requests (for manual testing)
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  return NextResponse.json({
    message: 'Revalidation endpoint is working',
    timestamp: new Date().toISOString(),
    usage: {
      POST: 'Send { tag, path, type } in request body',
      examples: {
        tag: 'POST /api/revalidate?secret=SECRET with body: { "tag": "servicePage" }',
        path: 'POST /api/revalidate?secret=SECRET with body: { "path": "/ueber-uns" }',
        type: 'POST /api/revalidate?secret=SECRET with body: { "type": "teamMember" }'
      }
    }
  })
} 