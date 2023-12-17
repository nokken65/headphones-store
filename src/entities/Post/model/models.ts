import type { ImageLinks } from '@/shared/types'

type Tag = {
  label: string
  href: string
}

type Post = {
  title: string
  date: Date
  views: number
  tags: Tag[]
  cover: ImageLinks
}

export type { Post, Tag }
