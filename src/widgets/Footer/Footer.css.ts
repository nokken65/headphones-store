import { containerStyles } from '@/shared/components/Container'
import { vars } from '@/shared/theme'
import { globalStyle, style } from '@vanilla-extract/css'

const footer = style({
  padding: 'clamp(1rem, 3dvw, 3rem) 0 1.5rem',
  color: vars.colors.textContrast,
})

const navigations = style([
  containerStyles.container,
  {
    display: 'flex',
    gap: 'clamp(1rem, 5dvw, 3rem)',
    padding: '0 clamp(1rem, 2dvw, 3rem)',
    flexWrap: 'wrap',
  },
])

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

globalStyle(`${footer} a:before`, {
  display: 'none',
})

export { copyright, footer, navigations, socialsList, socialsNav }
