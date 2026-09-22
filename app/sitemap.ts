import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://insurai.com.au'
  const lastModified = new Date()

  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/partnerships`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/media`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
