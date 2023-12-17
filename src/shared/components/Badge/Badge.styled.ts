import { styled } from 'styled-components'

const Badge = styled.span`
  min-width: 0.875rem;
  min-height: 0.875rem;
  padding: 0.1rem;
  border-radius: 0.875rem;
  color: ${({ theme }) => theme.colors.textContrast};
  background-color: ${({ theme }) => theme.colors.accent};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.625rem;
  font-weight: 500;
`

export { Badge }
