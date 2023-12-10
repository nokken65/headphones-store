import React from 'react'

import { HEADER_HEIGHT } from '@/shared/constants'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import * as S from './Background.styled'

const Background = () => {
  const { scrollY } = useScroll()
  const [isShow, setIsShow] = React.useState(false)

  useMotionValueEvent(scrollY, 'change', latest =>
    latest >= HEADER_HEIGHT / 2 ? setIsShow(true) : setIsShow(false)
  )

  return (
    <S.Background
      style={
        {
          '--transform': isShow ? 'translateY(0)' : `translateY(${HEADER_HEIGHT}px)`,
        } as React.CSSProperties
      }
    />
  )
}

export { Background }
