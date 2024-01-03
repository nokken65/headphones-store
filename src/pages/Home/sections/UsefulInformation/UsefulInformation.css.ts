import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import { vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const section = style([
  sectionStyles.section,
  {
    backgroundColor: vars.colors.backgroundPale,
  },
])

const container = style([
  containerStyles.container,
  {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    rowGap: 0,
  },
])

const heading = style([
  sectionStyles.heading,
  {
    flexBasis: '100%',
  },
])

const navigation = style({
  flex: 1,
  minWidth: '20rem',
  marginBottom: '1rem',
})

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

const link = style([
  linkStyles.link,
  {
    fontSize: '1.25rem',
  },
])

const description = style({
  fontSize: '1.25rem',
  lineHeight: 1.4,
  opacity: 0.7,

  flex: 1,
  minWidth: '20rem',
})

export { container, description, heading, link, list, listItem, navigation, section }
