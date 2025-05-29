import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Blog post queries
export async function getAllPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author,
      categories,
      featured,
      featuredImage,
      "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
    }
  `)
}

export async function getPostBySlug(slug: string) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      author,
      categories,
      featured,
      featuredImage,
      "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )
    }
  `, { slug })
}

export async function getFeaturedPosts() {
  return client.fetch(`
    *[_type == "blogPost" && featured == true] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author,
      featuredImage
    }
  `)
}