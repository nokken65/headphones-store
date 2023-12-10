import React from 'react'

import { ColorThemeSelector } from '@/features/select-color-theme'
import { Button } from '@/shared/components/Button'

import { Background } from './Backgroud'
import * as S from './Header.styled'

const _Header = () => {
  return (
    <S.Header>
      <Background />
      <Button style={{ height: '48px', width: '48px' }}>{'en'}</Button>
      <ColorThemeSelector />
    </S.Header>
  )
}

export const Header = React.memo(_Header)
