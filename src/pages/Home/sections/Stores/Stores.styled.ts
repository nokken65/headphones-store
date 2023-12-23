import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textContrast};

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 2rem;

  & > h2 {
    margin-bottom: 0;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 1rem;
  }
`

const Map = styled.picture`
  @media screen and (min-width: 992px) {
    grid-column: 2;
    grid-row: 1 / 3;
  }
  grid-column: 1;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
`

const StoreArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  & > table {
    width: 100%;
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
