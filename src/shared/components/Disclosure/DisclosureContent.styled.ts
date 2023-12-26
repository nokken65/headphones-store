import { styled } from 'styled-components'

const DisclosureContent = styled.div<{ $isExpanded: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)}fr;
  transition:
    grid-template-rows 0.2s linear,
    margin-bottom 0.2s linear;
  margin-bottom: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)}rem;

  & > div {
    overflow: hidden;
  }
`

export { DisclosureContent }
