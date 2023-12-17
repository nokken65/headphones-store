import { styled } from 'styled-components'

const Heading = styled.h1`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textContrast};

  position: absolute;
  top: 3rem;
  left: 3rem;
`

export { Heading }
