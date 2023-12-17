import { HEADER_HEIGHT } from '@/shared/constants'
import { css, styled } from 'styled-components'

const Header = styled.header<{ $isInverted: boolean }>`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  z-index: 1000;
  padding: 0 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  transition:
    background-color 0.1s ease-in-out,
    color 0.2s ease-in-out;

  background-color: ${({ theme, $isInverted }) =>
    $isInverted ? theme.colors.background : 'transparent'};

  color: ${({ theme, $isInverted }) =>
    $isInverted ? theme.colors.text : theme.colors.textContrast};

  position: ${({ $isInverted }) => ($isInverted ? 'fixed' : 'absolute')};
  ${({ $isInverted }) =>
    $isInverted
      ? css`
          top: 0;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        `
      : css`
          bottom: 0;
        `}
`

export { Header }
