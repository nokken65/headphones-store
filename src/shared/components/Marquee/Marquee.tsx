import React from 'react'

import * as S from './Marquee.styled'

type MarqueeProps = {
  items: React.ReactNode[]
}

const _Marquee = ({ items }: MarqueeProps) => {
  return <S.List>{items}</S.List>
}

export const Marquee = React.memo(_Marquee)
