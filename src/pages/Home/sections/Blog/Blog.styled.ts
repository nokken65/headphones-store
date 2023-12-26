import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)``

const Grid = styled.ul`
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 1fr;
  gap: 3rem;

  grid-template-columns: 1fr;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  & > h2 {
    margin: 0;
  }
`

const Link = styled.a`
  font-size: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 2rem;
    height: 1rem;
  }
`

export { Grid, Header, Link, Section }
