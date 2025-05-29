import { getAllPosts, getImageUrl } from '@/lib/api'
import Link from 'next/link'
import Image from 'next/image'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-gradient-to-br from-green-700 to-lime-300 min-h-screen">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl mt-12 font-bold text-gray-100 sm:text-5xl italic">
              Blog
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Stay updated with the latest insights and trends in healthcare
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.featuredImage && (
                    <div className="aspect-video relative">
                      <Image
                        src={getImageUrl(post.featuredImage)}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category) => (
                          <span
                            key={category}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full capitalize"
                          >
                            {category.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-green-600"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col text-sm text-gray-500">
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </time>
                        <span>{post.readingTime} min read • {post.views} views</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-white text-lg">No blog posts available yet.</p>
              <p className="text-blue-100 mt-2">Check back soon for our latest content!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}



// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { getAllPosts } from '@/lib/blog'

// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'Stay updated with the latest news and insights from the healthcare industry.',
// }

// export default function Blog() {
//   const posts = getAllPosts()

//   return (
//     <div className="bg-gradient-to-br from-green-700  to-lime-300">
//       <section className=" py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl mt-12 font-bold text-gray-100 sm:text-5xl italic">Blog</h1>
//             <p className="mt-4 text-xl text-blue-100">
//               Stay updated with the latest insights and trends in healthcare
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {posts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {posts.map((post) => (
//                 <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold text-gray-900 mb-2">
//                       <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
//                         {post.title}
//                       </Link>
//                     </h2>
//                     <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <time className="text-sm text-gray-500">
//                         {new Date(post.date).toLocaleDateString()}
//                       </time>
//                       <Link 
//                         href={`/blog/${post.slug}`} 
//                         className="text-blue-600 hover:text-blue-700 text-sm font-medium"
//                       >
//                         Read more
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-gray-600">No blog posts available yet.</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   )
// }