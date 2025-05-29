import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Shifa Medicals',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Medical News', value: 'medical-news' },
          { title: 'Wellness', value: 'wellness' },
          { title: 'Technology', value: 'technology' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})

// import {DocumentTextIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// export const postType = defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//       },
//     }),
//     defineField({
//       name: 'author',
//       type: 'reference',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         defineField({
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative text',
//         })
//       ]
//     }),
//     defineField({
//       name: 'categories',
//       type: 'array',
//       of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
//     }),
//     defineField({
//       name: 'publishedAt',
//       type: 'datetime',
//     }),
//     defineField({
//       name: 'body',
//       type: 'blockContent',
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })
