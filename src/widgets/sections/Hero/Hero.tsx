import React from 'react'

import { selectAccentColorModel } from '@/features/select-accent-color'
import { useStore } from '@nanostores/react'

import * as S from './Hero.styled'

type HeroProps = React.PropsWithChildren

const _Hero = ({ children }: HeroProps) => {
  const accentColor = useStore(selectAccentColorModel.$accentColor)

  return <S.Hero $accentColor={accentColor}>{children}</S.Hero>
}

export const Hero = React.memo(_Hero)
