import React from 'react'

import * as S from './BestDeals.styled'

const _BestDeals = () => {
  return (
    <S.Section>
      <S.Section.Heading title={'Best deals'} />
      content
    </S.Section>
  )
}

export const BestDeals = React.memo(_BestDeals)
