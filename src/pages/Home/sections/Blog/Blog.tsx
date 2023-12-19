import React from 'react'

import coverAvifSrc from '@/assets/images/blog/cover_1@1x.avif'
import coverPngSrc from '@/assets/images/blog/cover_1@1x.png'
import coverWebpSrc from '@/assets/images/blog/cover_1@1x.webp'
import { Post, PostPreviewCard } from '@/entities/Post'
import { Section } from '@/shared/components/Section'

import * as S from './Blog.styled'

const POST: Post = {
  title: 'Awards 2023: what to expect from the main award of the year?',
  date: new Date(),
  views: 2597,
  tags: [
    { label: 'News', href: '#' },
    { label: 'Articles', href: '#' },
  ],
  cover: { original: coverPngSrc, avif: coverAvifSrc, webp: coverWebpSrc },
}

const _Blog = () => {
  return (
    <S.Section aria-labelledby={'blog-heading'}>
      <S.Header aria-labelledby={'blog-heading'}>
        <h2 id={'blog-heading'}>Blog</h2>
        <a href={'#'}>view all</a>
      </S.Header>
      <S.Grid>
        {[...Array(6)].map((_, index) => (
          <li key={index}>
            <PostPreviewCard {...POST} />
          </li>
        ))}
      </S.Grid>
    </S.Section>
  )
}

export const Blog = React.memo(_Blog)
