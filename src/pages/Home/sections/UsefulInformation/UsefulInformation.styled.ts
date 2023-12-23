import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  column-gap: 3rem;
  row-gap: 2rem;

  & > h2 {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;

    & > h2 {
      grid-column: 1 / 3;
    }
  }
`

const List = styled.ul`
  line-height: 1.4;

  & > li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
`

const Link = styled.a`
  font-size: 1.25rem;
  text-decoration-line: underline;
`

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.4;
  opacity: 0.7;
`

export { Description, Link, List, Section }
