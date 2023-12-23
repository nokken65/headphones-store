import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)``

const Grid = styled.ul`
  width: 100%;
  display: grid;
  gap: 1rem;

  grid-template-columns: 1fr;
  grid-auto-rows: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    & > li:first-of-type {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    & > li:first-of-type {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
  }
`

export { Grid, Header, Section }
