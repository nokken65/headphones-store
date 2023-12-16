import { Card } from '@/shared/components/Card'
import { styled } from 'styled-components'

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

export { Item }
