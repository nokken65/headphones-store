import { styled } from 'styled-components'

const DisclosureTrigger = styled.button`
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:focus-visible {
    outline-offset: 0.2rem;
    outline: 2px solid orange;
  }
`

const DisclosureContent = styled.div`
  overflow-y: hidden;
`

const DisclosureTriggerIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`

export { DisclosureContent, DisclosureTrigger, DisclosureTriggerIcon }
