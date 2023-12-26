import { keyframes, styled } from 'styled-components'

const marquee = keyframes`
  0% {
    transform: translateX(0%)
  }
  
  100% {
    transform: translateX(-50%)
  }
`

const Wrapper = styled.div`
  overflow-x: hidden;
  display: flex;

  & > div {
    display: flex;
    animation: ${marquee} 60s infinite linear;
  }

  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 10%;
    z-index: 2;
  }

  &:before {
    left: 0;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.background},
      transparent
    );
  }

  &:after {
    right: 0;
    background-image: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.background},
      transparent
    );
  }
`

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-right: 1.5rem;
`

export { List, Wrapper }
