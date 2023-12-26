import { Card } from '@/shared/components/Card'
import { Section as BaseSection } from '@/shared/components/Section'
import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  ${container({ padding: '0 3rem 0 0' })}
`

const Item = styled(Card)(({ theme }) => ({
  width: '18.75rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexShrink: 0,
  fontWeight: 500,
  lineHeight: 1.2,

  '& p': {
    width: theme.spacing.full,
  },
}))

export { Item, Section }
