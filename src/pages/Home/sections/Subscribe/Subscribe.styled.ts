import { Section as BaseSection, SectionStyled } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  text-align: center;

  ${SectionStyled.Heading} {
    margin-bottom: 0.62rem;
  }

  ${SectionStyled.Title} {
    font-size: 2.75rem;
  }
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.7;
  margin-bottom: 3rem;
`

export { Description, Section }
