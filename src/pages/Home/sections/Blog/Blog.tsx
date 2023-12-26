import React from 'react'

import coverAvifSrc from '@/assets/images/blog/cover_1@1x.avif'
import coverPngSrc from '@/assets/images/blog/cover_1@1x.png'
import coverWebpSrc from '@/assets/images/blog/cover_1@1x.webp'
import arrowIconId from '@/assets/images/svg/arrow_alternative.svg'
import { Post, PostPreviewCard } from '@/entities/Post'
import { Icon } from '@/shared/components/Icon'

import * as S from './Blog.styled'

const generatePosts = () => {
  return [...Array(6)].map<Post>((_, index) => ({
    id: 'post-' + index,
    title: 'Awards 2023: what to expect from the main award of the year?',
    date: new Date(),
    views: 2597,
    tags: [
      { label: 'News', href: '#' },
      { label: 'Articles', href: '#' },
    ],
    cover: { original: coverPngSrc, avif: coverAvifSrc, webp: coverWebpSrc },
  }))
}

const _Blog = () => {
  return (
    <S.Section aria-labelledby={'blog-heading'}>
      <S.Header aria-labelledby={'blog-heading'}>
        <h2 id={'blog-heading'}>Blog</h2>
        <S.Link href={'#'}>
          view all <Icon id={arrowIconId} />
        </S.Link>
      </S.Header>
      <S.Grid>
        {generatePosts().map(post => (
          <li key={post.id}>
            <PostPreviewCard {...post} />
          </li>
        ))}
      </S.Grid>
    </S.Section>
  )
}

export const Blog = React.memo(_Blog)
