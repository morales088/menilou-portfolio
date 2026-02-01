import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getClientBySlug, getAllClientSlugs } from "@/lib/clientsData";
import VideoThumbnail from "@/components/VideoThumbnail";
import WorkSamplesGallery from "@/components/WorkSamplesGallery";

export async function generateStaticParams() {
  const slugs = getAllClientSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function ClientDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-background-dark">
        <div className="absolute inset-0">
          <Image
            src={client.coverImage}
            alt={client.name}
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
        
        <div className="container-custom relative h-full flex flex-col justify-end pb-16 md:pb-20">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-white hover:text-accent-orange transition-colors mb-6 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Clients
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {client.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">{client.industry}</p>
          <p className="text-gray-400 max-w-2xl">{client.shortDescription}</p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="section-padding">
        <div className="container-custom">
          {client.services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="mb-20 last:mb-0">
              {/* Service Header */}
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h2>
                
                {/* Tools Used */}
                {service.tools && service.tools.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Tools Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Outcomes */}
                {service.outcomes && service.outcomes.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">Key Outcomes:</p>
                    <ul className="space-y-1">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-accent-orange mt-1">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Media Gallery */}
              {service.media.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.media.map((media, mediaIndex) => (
                    <div key={mediaIndex}>
                      {media.type === 'image' ? (
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
                          <Image
                            src={media.url}
                            alt={media.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <VideoThumbnail
                          videoUrl={media.url}
                          alt={media.alt}
                          caption="Work Sample"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* No Media Message */}
              {service.media.length === 0 && (
                <p className="text-gray-500 italic">Media samples coming soon</p>
              )}
            </div>
          ))}
        </div>

        {/* Work Samples Gallery */}
        {client.galleryVideos && client.galleryVideos.length > 0 && (
          <WorkSamplesGallery videos={client.galleryVideos} />
        )}
      </section>

      {/* Back to Portfolio CTA */}
      <section className="py-12 bg-background-dark">
        <div className="container-custom text-center">
          <Link
            href="/#portfolio"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            View All Clients
          </Link>
        </div>
      </section>
    </div>
  );
}
