import { styled } from 'styled-components'

const Section = styled.section`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textContrast};

  padding: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 1rem;
`

const Map = styled.picture`
  grid-column: 2;
  grid-row: 1 / 3;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`

const StoreArticle = styled.article`
  & > button {
    margin-top: 3rem;
  }

  & > table {
    & th,
    td {
      padding-bottom: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`

const StoreAddress = styled.h3`
  margin-bottom: 3rem;
`

export { Map, Section, StoreAddress, StoreArticle }
