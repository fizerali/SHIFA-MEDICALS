const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage?: {
    filename: string
    originalName: string
    mimetype: string
    size: number
    url: string
  }
  categories: string[]
  author: string
  featured: boolean
  published: boolean
  publishedAt: string
  readingTime: number
  views: number
  createdAt: string
  updatedAt: string
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_BASE_URL}/blogs?limit=100`)
  const data = await response.json()
  return data.blogs || []
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await fetch(`${API_BASE_URL}/blogs/${slug}`)
  if (!response.ok) return null
  return await response.json()
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const response = await fetch(`${API_BASE_URL}/blogs/public/featured`)
  const data = await response.json()
  return data || []
}

export function getImageUrl(imageInfo: any): string {
  if (!imageInfo) return '/placeholder-image.jpg'
  return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}${imageInfo.url}`
}