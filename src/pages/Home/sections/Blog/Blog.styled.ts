import { Card as CardBase } from '@/shared/components/Card'
import { styled } from 'styled-components'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
`

const Card = styled(CardBase)`
  padding: 1rem;
  border-radius: unset;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: space-between;

  width: 100%;
  height: 100%;

  & > ul {
    display: flex;
    gap: 1rem;

    & a {
      font-size: 0.8rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.textInvert};
    }
  }

  & > footer {
    margin-top: auto;
    opacity: 0.5;

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    & svg {
      height: 1rem;
      width: 1rem;
      margin-right: 0.6rem;
    }
  }
`

const Cover = styled.img`
  object-fit: cover;
  width: calc(100% + 2rem);
  margin: -1rem -1rem 0;
  aspect-ratio: 1 / 1;
`
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  & > h2 {
    margin: 0;
  }

  & > a {
    font-size: 1.5rem;
    opacity: 0.7;
  }
`

export { Card, Cover, Grid, Header }
