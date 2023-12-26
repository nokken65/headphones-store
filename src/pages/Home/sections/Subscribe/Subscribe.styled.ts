import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  text-align: center;

  & > h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 3rem;
`

export { Description, Section }
