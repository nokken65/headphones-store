import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  padding: 3rem;

  @media screen and (min-width: 1366px) {
    & > h2 {
      max-width: 1366px;
      margin: 0 auto 3rem;
    }
  }
`

export { Section }
