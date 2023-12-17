import { Card as BaseCard } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Card = styled(BaseCard)`
  min-width: 22.375rem;
  display: grid;
  grid-template-columns: 1fr fit-content(40%) auto;
  grid-template-rows: auto;
`

const Image = styled.img`
  grid-column: 1 / 4;
  object-fit: cover;
  width: 100%;
  height: 20.3125rem;
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

  & > svg {
    margin-right: 0.5rem;
  }
`

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
`

const OldPriceWrapper = styled.div`
  font-weight: 500;
`
const OldPrice = styled.span`
  text-decoration-line: line-through;
  opacity: 0.5;
  margin-right: 0.5rem;
  vertical-align: middle;
`

const Sale = styled.b`
  font-size: 0.75rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.colors.textInvert};
  background-color: ${({ theme }) => theme.colors.accent};
`

const AddToCart = styled.button`
  grid-column: 2 / 4;
  grid-row: 4 / 6;

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

export { AddToCart, Card, Category, Image, Name, OldPrice, OldPriceWrapper, Price, Rating, Sale }
