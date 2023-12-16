import React from 'react'

import * as S from './OurStores.styled'

const _OurStores = () => {
  return (
    <S.Section>
      <S.Section.Heading hidden title={'Our stores'} />
      content
    </S.Section>
  )
}

export const OurStores = React.memo(_OurStores)
