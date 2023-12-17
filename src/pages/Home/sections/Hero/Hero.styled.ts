import { Icon } from '@/shared/components/Icon'
import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  color: ${({ theme }) => theme.colors.textInvert};
  background-color: transparent;
  min-height: 100dvh;
  height: 100dvh;
  padding: 10dvw 4dvw;

  display: grid;
  grid-template-areas:
    'prev image small    next'
    'prev image slogan   next'
    'prev image category next'
    'prev image name     next'
    'prev image price    next'
    'prev image action   next';
  grid-template-columns: 32px 1fr 1fr 32px;
  grid-template-rows: fit-content(40%) 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;

  & > * {
    align-self: center;
  }
`
const PreviousIcon = styled(Icon)`
  grid-area: prev;
  transform: rotate(180deg);
`

const NextIcon = styled(Icon)`
  grid-area: next;
`

const Image = styled.img`
  grid-area: image;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
`

const Small = styled.small`
  grid-area: small;
  font-size: 1.375dvw;
  font-weight: 500;
  letter-spacing: 0.1375rem;
  text-transform: uppercase;
`

const Slogan = styled.p`
  grid-area: slogan;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 6.25dvw;
  font-weight: 700;
  text-transform: uppercase;
`

const Category = styled.p`
  grid-area: category;
  font-size: 1dvw;
  opacity: 0.8;
`

const Name = styled.h2`
  grid-area: name;
  font-size: 2dvw;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 0 !important;
`

const Price = styled.p`
  grid-area: price;

  font-size: 2.75dvw;
  font-weight: 700;

  margin-bottom: 1rem;

  & > sup {
    opacity: 0.5;
    font-size: 1.8dvw;
    font-weight: 500;
    line-height: 1.2;
    text-decoration-line: line-through;
  }
`

const Action = styled.button`
  grid-area: action;
  background-color: transparent;
  color: inherit;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.4;
  border-radius: 1.5rem;
  border: 2px solid #fafafa;
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  width: fit-content;
`

export { Action, Category, Image, Name, NextIcon, PreviousIcon, Price, Section, Slogan, Small }
