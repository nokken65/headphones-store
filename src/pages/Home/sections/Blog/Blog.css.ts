import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import { style } from '@vanilla-extract/css'

const section = style([sectionStyles.section])

const container = style([containerStyles.container])

const grid = style({
  display: 'grid',
  gridAutoRows: '1fr',
  gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
  gap: 'clamp(1rem, 2dvw, 2rem)',
})

const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 'clamp(1rem, 2dvw, 3rem)',
})

const heading = style([
  sectionStyles.heading,
  {
    marginBottom: 0,
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

export { container, grid, header, heading, link, linkIcon, section }
