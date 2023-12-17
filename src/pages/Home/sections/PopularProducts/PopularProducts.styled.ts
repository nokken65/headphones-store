import { styled } from 'styled-components'

const Grid = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;

  & > li:first-of-type {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
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

export { Grid, Header }
