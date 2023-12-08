import React from 'react'

import { ColorThemeSelector } from '@/features/select-color-theme'
import { styled } from 'styled-components'

import { withProviders } from './providers'

const _App = () => {
  return (
    <div className={'App'}>
      <Title>Headphones Store</Title>
      <ColorThemeSelector />
    </div>
  )
}

export const App = withProviders(_App)

const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
`
