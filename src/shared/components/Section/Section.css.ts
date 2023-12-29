import { breakpoints, vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const section = style({
  backgroundColor: vars.colors.background,
  padding: '3rem 1rem',

  '@media': {
    [breakpoints.sm]: {
      padding: '3rem 2rem',
    },
    [breakpoints.md]: {
      padding: '3rem',
    },
  },
})

const heading = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '2rem',

  '@media': {
    [breakpoints.md]: {
      marginBottom: '3rem',
    },
  },
})

export { heading, section }
