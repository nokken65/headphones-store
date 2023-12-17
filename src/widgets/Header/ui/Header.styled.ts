import { HEADER_HEIGHT } from '@/shared/constants'
import { styled } from 'styled-components'

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 1000;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  transition:
    background-color 0.1s ease-in-out,
    color 0.2s ease-in-out;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.textContrast};

  &[data-is-inverted] {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`

export { Header }
