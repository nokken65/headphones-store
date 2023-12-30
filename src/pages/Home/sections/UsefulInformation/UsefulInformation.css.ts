import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import { breakpoints } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const section = style([
  sectionStyles.section,
  { },
])

const container = style([
  containerStyles.container,
  {
    display: 'grid',
    gridAutoRows: 'auto',
    gridTemplateColumns: '1fr',
    columnGap: '1rem',
    rowGap: '2rem',
    lineHeight: 1.4,

    '@media': {
      [breakpoints.md]: {
        gridTemplateColumns: '1fr 1fr',
        rowGap: '3rem',
      },
    },
  },
])

const list = style({
  lineHeight: 1.4,
})

const listItem = style({
  display: 'inline-block',
  selectors: {
    '&:not(:last-of-type)': {
      marginRight: '1.5rem',
    },
  },
})

const heading = style([
  sectionStyles.heading,
  {
    marginBottom: 0,

    '@media': {
      [breakpoints.md]: {
        gridColumn: '1 / 3',
      },
    },
  },
])

const link = style([
  linkStyles.link,
  {
    fontSize: '1.25rem',
    textDecoration: 'underline',
  },
])

const description = style({
  fontSize: '1.25rem',
  lineHeight: 1.4,
  opacity: 0.7,
})

export { container,description, heading, link, list, listItem, section }
