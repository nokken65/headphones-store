import { breakpoints, vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const footer = style({
  padding: '3rem 0rem 1.5rem',
  color: vars.colors.textContrast,
})

const navContainer = style({
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [breakpoints.md]: {
      gap: '3rem',
      flexDirection: 'row',
    },
    [breakpoints.lg]: {
      gap: '5rem',
    },
  },
})

const socialsNav = style({
  marginTop: '3rem',
})

const socialsList = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',
})

const copyright = style({
  textAlign: 'center',
  fontSize: '0.8rem',
  fontWeight: 500,
  margin: '3rem auto 0',
  display: 'block',
})

export { copyright, footer, navContainer, socialsList, socialsNav }
