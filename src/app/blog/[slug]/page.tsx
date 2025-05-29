import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getPostBySlug, urlFor } from '@/lib/sanity'

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-green-600 hover:text-green-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-green-500 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          ← Back to Blog
        </Link>

        {post.featuredImage && (
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.featuredImage).width(1200).height(675).url()}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category: string) => (
                <span
                  key={category}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
          )}
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600">
            <span>By {post.author}</span>
            <span>•</span>
            <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            {post.estimatedReadingTime && (
              <>
                <span>•</span>
                <span>{post.estimatedReadingTime} min read</span>
              </>
            )}
          </div>
        </header>

        <div className="prose prose-lg prose-green max-w-none">
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
        </div>
      </article>
    </div>
  )
}