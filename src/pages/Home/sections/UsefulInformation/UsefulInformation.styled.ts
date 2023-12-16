import { Section as BaseSection, SectionStyled } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  background-color: ${({ theme }) => theme.colors.backgroundPale};

  padding: 48px;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr;
  column-gap: 0;

  ${SectionStyled.Heading} {
    grid-column: 1 / 3;
    padding: 0;
  }
`

const List = styled.ul`
  line-height: 1.4;

  & > li {
    display: inline-block;

    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
`

const Link = styled.a`
  font-size: 1.25rem;
  text-decoration-line: underline;
`

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textPale};
`

export { Description, Link, List, Section }