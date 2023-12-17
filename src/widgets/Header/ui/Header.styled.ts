import { HEADER_HEIGHT } from '@/shared/constants'
import { styled } from 'styled-components'

const Header = styled.header`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 1000;
  // overflow: 'hidden',
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  // transition: 'background-color 0.1s ease-in-out',
  color: ${({ theme }) => theme.colors.textContrast};
`

export { Header }
