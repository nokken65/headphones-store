import { Card } from '@/shared/components/Card'
import { Section as BaseSection, SectionStyled } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  padding-left: 0;
  padding-right: 0;

  ${SectionStyled.Heading} {
    padding: 0 48px;
  }
`

const Item = styled(Card)(({ theme }) => ({
  width: '18.75rem',
  minWidth: '18.75rem',
  padding: '48px 24px',

  '& img': {
    width: '100%',
  },
}))

export { Item, Section }
