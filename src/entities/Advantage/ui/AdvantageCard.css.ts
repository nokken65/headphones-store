import { cardStyles } from '@/shared/components/Card'
import { style } from '@vanilla-extract/css'

const card = style([
  cardStyles.card,
  {
    width: '18.75rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexShrink: 0,
    fontWeight: 500,
    lineHeight: 1.2,
  },
])

export { card }
