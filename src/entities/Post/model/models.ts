import type { ImageLinks } from '@/shared/types'

type PostTag = {
  label: string
  href: string
}

type Post = {
  id: string
  title: string
  date: Date
  views: number
  tags: PostTag[]
  cover: ImageLinks
}

export type { Post, PostTag }
