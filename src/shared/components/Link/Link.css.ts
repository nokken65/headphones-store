import { vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const link = style({
  cursor: 'pointer',
  ':hover': {
    color: vars.colors.link,
  },
  selectors: {
    [`&[href^="tel:"]`]: {
      textDecoration: 'underline',
    },
  },
})

export { link }
