import { css, styled } from 'styled-components'

const List = styled.ol`
  display: flex;
  gap: 1rem;
`

const Action = styled.button<{ $isSelected: boolean }>`
  cursor: pointer;
  font-weight: 500;
  line-height: 1.4;
  text-transform: uppercase;
  padding: 0.625rem 1.5rem;
  border-radius: 1rem;
  ${({ $isSelected, theme }) =>
    $isSelected
      ? css`
          color: ${theme.colors.textInvert};
          background-color: ${theme.colors.text};
          border: 2px solid ${theme.colors.text};
        `
      : css`
          color: ${theme.colors.text};
          border: 2px solid ${theme.colors.text};
          background-color: transparent;
        `}
`

export { Action, List }