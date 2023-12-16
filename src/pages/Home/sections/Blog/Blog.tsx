import React from 'react'

import * as S from './Blog.styled'

const _Blog = () => {
  return (
    <S.Section>
      <S.Section.Heading title={'Blog'} />
      content
    </S.Section>
  )
}

export const Blog = React.memo(_Blog)
