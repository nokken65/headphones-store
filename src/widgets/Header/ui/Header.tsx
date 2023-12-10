import React from 'react'

import { ColorThemeSelector } from '@/features/select-color-theme'
import { Button } from '@/shared/components/Button'

import '../model'

import { Block } from './Block'
import * as S from './Header.styled'

const _Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Block>
          <Button style={{ height: '48px', width: '48px' }}>{'en'}</Button>
          <ColorThemeSelector />
        </Block>
      </S.Container>
    </S.Header>
  )
}

export const Header = React.memo(_Header)
