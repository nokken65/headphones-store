import { styled } from 'styled-components'

const Trigger = styled.button`
  color: inherit;
  line-height: 1.4;

  & > svg {
    vertical-align: middle;
    margin-left: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
    transform: rotate(-90deg);
  }
`

export { Trigger }
