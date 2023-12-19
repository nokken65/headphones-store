import { styled } from 'styled-components'

const Badge = styled.span`
  min-width: 0.875rem;
  min-height: 0.875rem;
  padding: 0.1rem;
  border-radius: 0.875rem;
  /* color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.accent}; */
  color: #fafafa;
  background-color: #0a0a0a;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.625rem;
  font-weight: 500;

  /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
`

export { Badge }
