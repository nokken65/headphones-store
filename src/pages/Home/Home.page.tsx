import { ColorThemeSelector } from '@/features/select-color-theme'
import { styled } from 'styled-components'

import { Hero } from './sections/Hero'
import { LatestCollection } from './sections/LatestCollection'

const Home = () => {
  return (
    <>
      <Hero>
        <ColorThemeSelector />
      </Hero>
      <LatestCollection>
        <Title>latest Collection</Title>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, enim?</p>
      </LatestCollection>
    </>
  )
}

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.accent};
  text-align: center;
  margin-bottom: 32px;
`

export { Home }
