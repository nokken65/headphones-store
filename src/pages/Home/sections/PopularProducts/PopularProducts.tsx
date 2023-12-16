import React from 'react'

import * as S from './PopularProducts.styled'

const _PopularProducts = () => {
  return (
    <S.Section>
      <S.Section.Heading title={'Popular products'} />
      content
    </S.Section>
  )
}

export const PopularProducts = React.memo(_PopularProducts)
