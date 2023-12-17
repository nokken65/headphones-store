import React from 'react'

import cover from '@/assets/images/blog/cover_1.webp'
import eyeIconId from '@/assets/images/svg/eye.svg'
import { Icon } from '@/shared/components/Icon'
import { Section } from '@/shared/components/Section'

import * as S from './Blog.styled'

const Article = () => (
  <S.Card>
    <S.Cover alt={'cover'} src={cover} />
    <ul>
      <li>
        <a href={'#'}>News</a>
      </li>
      <li>
        <a href={'#'}>Articles</a>
      </li>
    </ul>
    <h4>Awards 2023: what to expect from the main award of the year?</h4>
    <footer>
      <time dateTime={'2023-12-07'}>07.12.2023</time>
      <span>
        <Icon id={eyeIconId} />
        2597
      </span>
    </footer>
  </S.Card>
)

const _Blog = () => {
  return (
    <Section>
      <S.Header>
        <h2>Blog</h2>
        <a href={'#'}>view all</a>
      </S.Header>
      <S.Grid>
        {[...Array(6)].map((_, index) => (
          <li key={index}>
            <Article />
          </li>
        ))}
      </S.Grid>
    </Section>
  )
}

export const Blog = React.memo(_Blog)
