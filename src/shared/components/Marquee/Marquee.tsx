import React from 'react'

import * as S from './Marquee.styled'

type MarqueeProps = {
  items: React.ReactNode[]
}

const _Marquee = ({ items }: MarqueeProps) => {
  const [isPause, setIsPause] = React.useState(false)

  return (
    <S.Wrapper onPointerEnter={() => setIsPause(true)} onPointerLeave={() => setIsPause(false)}>
      <div style={{ animationPlayState: isPause ? 'paused' : 'running' }}>
        <S.List>{items}</S.List>
        <S.List aria-hidden>{items}</S.List>
      </div>
    </S.Wrapper>
  )
}

export const Marquee = React.memo(_Marquee)
