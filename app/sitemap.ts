
import { MetadataRoute } from 'next'
import { getAllDocs } from '@/lib/docs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mdbahrulilmi.my.id'

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/showcase`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const docsPages: MetadataRoute.Sitemap = getAllDocs().map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...docsPages]
}
