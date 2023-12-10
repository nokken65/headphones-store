import React from 'react'

import { selectAccentColorModel } from '@/features/select-accent-color'
import { useStore } from '@nanostores/react'

import * as S from './Footer.styled'

const _Footer = () => {
  const accentColor = useStore(selectAccentColorModel.$accentColor)

  return (
    <S.Footer $accentColor={accentColor}>
      <h3>footer</h3>
      <div>
        <button onClick={() => selectAccentColorModel.$accentColor.set('red')}>red</button>
        <button onClick={() => selectAccentColorModel.$accentColor.set('blue')}>blue</button>
        <button onClick={() => selectAccentColorModel.$accentColor.set('cyan')}>cyan</button>
      </div>
    </S.Footer>
  )
}

export const Footer = React.memo(_Footer)
