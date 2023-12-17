import { Card as BaseCard } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Card = styled(BaseCard)`
  min-width: 18rem;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr fit-content(40%) auto;
  grid-template-rows: 1fr fit-content(40%) auto;
`

const Image = styled.picture`
  grid-column: 1 / 4;

  & > img {
    object-fit: contain;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
  }
`

const Category = styled.p`
  grid-column: 1 / 4;
  font-size: 1rem;
  opacity: 0.7;
`

const Name = styled.h3`
  grid-column: 1 / 3;
  font-size: 1.25rem;
  font-weight: 500;

  margin-bottom: 1rem;
`

const Rating = styled.span`
  font-weight: 500;
  margin-left: 1rem;

  & > svg {
    margin-right: 0.5rem;
  }
`

const AddToCart = styled.button`
  grid-column: 2 / 4;
  grid-row: 4 / 6;
  height: 3rem;
  align-self: flex-end;

  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.textInvert};
  background-color: ${({ theme }) => theme.colors.text};
`

export { AddToCart, Card, Category, Image, Name, Rating }
