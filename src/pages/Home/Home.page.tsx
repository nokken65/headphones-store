import { ColorThemeSelector } from '@/features/select-color-theme'
import { styled } from 'styled-components'

import { Features } from './sections/Features'
import { Hero } from './sections/Hero'
import { LatestCollection } from './sections/LatestCollection'
import { Subscribe } from './sections/Subscribe'

const Home = () => {
  return (
    <>
      <Hero>
        <ColorThemeSelector />
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
        <Title>features</Title>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, enim?</p>
      </Subscribe>
    </>
  )
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 32px;
`

export { Home }
