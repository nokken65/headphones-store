import React from 'react'

import { selectAccentColorModel } from '@/features/select-accent-color'
import { useStore } from '@nanostores/react'

import * as S from './Hero.styled'

type HeroProps = React.PropsWithChildren

const Hero = ({ children }: HeroProps) => {
  const accentColor = useStore(selectAccentColorModel.$accentColor)

  return <S.Hero accentColor={accentColor}>{children}</S.Hero>
}

export { Hero }
