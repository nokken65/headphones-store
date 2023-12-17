import { styled } from 'styled-components'

const List = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const Link = styled.a<{ $isSelected: boolean }>`
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.accent : 'inherit')} !important;

  & > svg {
    margin-right: 0.2rem;
    vertical-align: text-top;
  }
`

export { Link, List }
