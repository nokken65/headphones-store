import { styled } from 'styled-components'

const Section = styled.section`
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.background};

  & > h2 {
    margin-bottom: 3rem;
  }
`

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;
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

export { Grid, Header, Section }
