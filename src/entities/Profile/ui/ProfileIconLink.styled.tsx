import { Button } from '@/shared/components/Button'
import { styled } from 'styled-components'

const ButtonLink = styled(Button)`
  border-radius: 0;
  padding: 1rem;

  &:hover {
    background-color: unset;
    color: ${({ theme }) => theme.colors.accent};
  }
`

export { ButtonLink }
