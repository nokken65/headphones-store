import { styled } from 'styled-components'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundPale};
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr;
  column-gap: 0;
  padding: 3rem;

  & > h2 {
    margin-bottom: 3rem;
    grid-column: 1 / 3;
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
