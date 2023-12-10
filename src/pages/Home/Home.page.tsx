import React from 'react'

import { Features } from '@/widgets/sections/Features'
import { Hero } from '@/widgets/sections/Hero'
import { LatestCollection } from '@/widgets/sections/LatestCollection'
import { Subscribe } from '@/widgets/sections/Subscribe'
import { styled } from 'styled-components'

import { DefaultLayout } from '../layouts/Default'

const _Home = () => {
  return (
    <DefaultLayout>
      <Hero>
        <p>sds</p>
      </Hero>
      <LatestCollection>
        <Title>latest collection</Title>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, enim?</p>
      </LatestCollection>
      <Features>
        <Title>features</Title>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, enim?</p>
      </Features>
      <Subscribe>
        <Title>subscribe</Title>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, enim?</p>
      </Subscribe>
    </DefaultLayout>
  )
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 32px;
`

export const Home = React.memo(_Home)
