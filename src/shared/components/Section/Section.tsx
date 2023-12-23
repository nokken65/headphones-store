import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};

  & > h2,
  header {
    margin-bottom: 2rem;
  }

  padding: 3rem 1rem;

  @media screen and (min-width: 576px) {
    padding: 3rem 2rem;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem;

    & > h2,
    header {
      margin-bottom: 3rem;
    }
  }

  ${container()}
`

export { Section }
