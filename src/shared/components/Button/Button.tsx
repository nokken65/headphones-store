import { css, styled } from 'styled-components'

type ButtonProps = {
  $variant?: 'filled' | 'outline' | 'subtle'
  $padding?: string
  $iconId?: string
}

const _Button = styled.button.attrs<ButtonProps>(props => ({
  ...props,
  type: props.type ?? 'button',
  $variant: props.$variant ?? 'filled',
  $padding: props.$padding ?? '1rem 1.5rem',
}))`
  appearance: none;
  padding: ${({ $padding }) => $padding};
  border-radius: 1rem;
  cursor: pointer;

  font-weight: 500;

  &:focus-visible {
    outline-offset: 0.2rem;
    outline: 2px solid orange;
  }

  transition:
    transform 0.1s ease-in-out,
    color 0.1s ease-in-out,
    border 0.1s ease-in-out,
    background-color 0.1s ease-in-out;

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'filled':
        return css`
          border: 2px solid ${theme.colors.text};
          background-color: ${theme.colors.text};
          color: ${theme.colors.textInvert};

          &:hover {
            background-color: transparent;
            color: ${theme.colors.text};
          }

          &:active {
            transform: scale(0.98);
          }
        `
      case 'outline':
        return css`
          border: 2px solid ${theme.colors.text};
          background-color: transparent;
          color: ${theme.colors.text};

          &:hover {
            background-color: ${theme.colors.text};
            color: ${theme.colors.textInvert};
          }

          &:active {
            transform: scale(0.98);
          }
        `
      case 'subtle':
        return css`
          border: 0;
          background-color: transparent;
          color: ${theme.colors.text};

          &:hover {
            background-color: ${theme.colors.text};
            color: ${theme.colors.textInvert};
          }

          &:active {
            transform: scale(0.98);
          }
        `
      default:
        return ''
    }
  }}
`

export const Button = _Button
