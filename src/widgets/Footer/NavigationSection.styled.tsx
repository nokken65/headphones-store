import { styled } from 'styled-components'

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const List = styled.ul`
  & li:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

export { Heading, List }
