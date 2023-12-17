import { styled } from 'styled-components'

const Trigger = styled.button`
  color: ${({ theme }) => theme.colors.textContrast};

  & > svg {
    width: 1rem;
    height: 1rem;
  }
`

export { Trigger }
