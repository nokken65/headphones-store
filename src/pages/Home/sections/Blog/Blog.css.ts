import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import { breakpoints } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const section = style([sectionStyles.section])

const container = style([containerStyles.container])

const grid = style({
  margin: '0 auto',
  display: 'grid',
  gridAutoRows: '1fr',
  gap: '3rem',

  gridTemplateColumns: '1fr',

  '@media': {
    [breakpoints.sm]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakpoints.lg]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

const gridItem = style({
  display: 'flex',
})

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '3rem',
})

const heading = style([
  sectionStyles.heading,
  {
    margin: 0,
  },
])

const link = style([
  linkStyles.link,
  {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
])

const linkIcon = style([
  linkStyles.link,
  {
    width: '2rem',
    height: '1rem',
  },
])

export { container, grid, gridItem, header, heading, link, linkIcon, section }
