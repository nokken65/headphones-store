import { Card as BaseCard } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Card = styled(BaseCard)`
  padding: 1rem;
  border-radius: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  justify-content: space-between;

  width: 100%;
  height: 100%;

  transition: outline-color 0.2s ease-in-out;
  outline: 5px solid transparent;
  outline-offset: 0.2rem;

  &:focus-within,
  &:has(a:hover) {
    outline-color: ${({ theme }) => theme.colors.text};

    & > h3 {
      text-decoration: underline;
    }
  }
`

const Link = styled.a`
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    background-color: transparent;
  }
`

const Image = styled.img`
  object-fit: cover;
  width: calc(100% + 2rem);
  margin: -1rem -1rem 0;
  aspect-ratio: 1 / 1;
`

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.li`
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.textInvert} !important;
`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`

const Footer = styled.footer`
  margin-top: auto;
  opacity: 0.5;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & svg {
    height: 0.8rem;
    width: 1rem;
    margin-right: 0.2rem;
  }
`

export { Card, Footer, Image, Link, Tag, TagList, Title }
