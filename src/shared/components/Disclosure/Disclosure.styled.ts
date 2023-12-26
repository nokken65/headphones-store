import { styled } from 'styled-components'

const DisclosureTrigger = styled.button<{ $isExpanded: boolean }>`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: 100%;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: margin-bottom 0.2s linear;
  margin-bottom: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)}rem;

  &:focus-visible {
    outline-offset: 0.2rem;
    outline: 2px solid orange;
  }
`

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

const DisclosureTriggerIcon = styled.svg<{ $isExpanded: boolean }>`
  width: 1.5rem;
  height: 1.5rem;

  transform: rotateZ(${({ $isExpanded }) => ($isExpanded ? 45 : 0)}deg);

  transition: transform 0.2s linear;
`

export { DisclosureContent, DisclosureTrigger, DisclosureTriggerIcon }
