import { getTeamMembers } from '@/lib/api'
import { urlFor } from '@/lib/sanity'
import PortableText from '@/components/PortableText'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

// Metadata für SEO
export const metadata: Metadata = {
  title: 'Kontaktpersonen - Neon Murer AG',
  description: 'Lernen Sie unser erfahrenes Team bei der Neon Murer AG kennen. Ihre Ansprechpartner für Lichtwerbung und Werbetechnik.',
  keywords: ['Team', 'Kontakt', 'Neon Murer', 'Lichtwerbung', 'Mitarbeiter'],
}

export default async function KontaktpersonenSanityPage() {
  // Daten aus Sanity CMS laden
  const teamMembers = await getTeamMembers()
  
  // Fallback falls keine Daten verfügbar
  if (!teamMembers || teamMembers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#112357] mb-8">
              Kontaktpersonen
            </h1>
            <p className="text-gray-600 mb-8">
              Teamdaten werden noch im Sanity CMS konfiguriert...
            </p>
            <Link 
              href="/ueber-uns/kontaktpersonen"
              className="inline-block bg-[#112357] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Zur statischen Version
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Gruppiere Team-Mitglieder nach Abteilung
  const departmentGroups = teamMembers.reduce((groups: any, member) => {
    const dept = member.department || 'Allgemein'
    if (!groups[dept]) {
      groups[dept] = []
    }
    groups[dept].push(member)
    return groups
  }, {})

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#112357] to-[#1a3a6b] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Unser Team
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Lernen Sie die Menschen hinter der Neon Murer AG kennen. 
            Unser erfahrenes Team steht Ihnen bei allen Fragen rund um 
            Lichtwerbung und Werbetechnik zur Verfügung.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-[#ffd401] text-[#112357] px-6 py-2 rounded-full font-semibold">
              {teamMembers.length} Teammitglieder • Powered by Sanity CMS
            </div>
          </div>
        </div>
      </section>

      {/* Team-Mitglieder nach Abteilungen */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(departmentGroups).map(([department, members]: [string, any]) => (
            <div key={department} className="mb-16">
              {/* Abteilungs-Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#112357] mb-4">
                  {department}
                </h2>
                <div className="w-24 h-1 bg-[#ffd401] mx-auto rounded-full"></div>
              </div>

              {/* Team-Mitglieder Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member: any) => (
                  <div 
                    key={member._id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Mitarbeiter-Foto */}
                    <div className="aspect-square overflow-hidden">
                      {member.image?.asset ? (
                        <Image
                          src={urlFor(member.image).width(400).height(400).url()}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#112357] to-[#1a3a6b] flex items-center justify-center">
                          <div className="text-6xl text-white font-bold">
                            {member.name.charAt(0)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Mitarbeiter-Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#112357] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-[#ffd401] font-semibold mb-3">
                        {member.position}
                      </p>
                      
                      {/* Kontakt-Info */}
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        {member.email && (
                          <div className="flex items-center">
                            <span className="w-4 h-4 mr-2">📧</span>
                            <a 
                              href={`mailto:${member.email}`}
                              className="hover:text-[#112357] transition-colors"
                            >
                              {member.email}
                            </a>
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center">
                            <span className="w-4 h-4 mr-2">📞</span>
                            <a 
                              href={`tel:${member.phone}`}
                              className="hover:text-[#112357] transition-colors"
                            >
                              {member.phone}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Bio (falls vorhanden) */}
                      {member.bio && Array.isArray(member.bio) && member.bio.length > 0 && (
                        <div className="text-sm text-gray-700">
                          <PortableText content={member.bio} className="prose-sm" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#112357] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Unser Team steht Ihnen gerne zur Verfügung. 
            Kontaktieren Sie uns für eine persönliche Beratung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-[#ffd401] text-[#112357] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/ueber-uns/stellenangebote"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#112357] transition-colors"
            >
              Karriere bei uns
            </Link>
          </div>
        </div>
      </section>
      
      {/* Debug Info (nur in Development) */}
      {process.env.NODE_ENV === 'development' && (
        <section className="bg-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <details className="bg-white p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                🔍 Debug: Sanity-Daten (nur in Development)
              </summary>
              <pre className="mt-4 text-xs bg-gray-50 p-4 rounded overflow-auto max-h-64">
                {JSON.stringify(teamMembers, null, 2)}
              </pre>
            </details>
          </div>
        </section>
      )}
    </div>
  )
} 