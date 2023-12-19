import { HEADER_HEIGHT } from '@/shared/constants'
import { styled } from 'styled-components'

const Header = styled.header`
  position: absolute;
  bottom: 0;
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
    position: fixed;
    top: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const Heading = styled.h1`
  text-transform: uppercase;
`

export { Header, Heading }
