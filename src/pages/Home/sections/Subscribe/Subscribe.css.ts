import { containerStyles } from '@/shared/components/Container'
import { sectionStyles } from '@/shared/components/Section'
import { style } from '@vanilla-extract/css'

const section = style([
  sectionStyles.section,
  {
    textAlign: 'center',
  },
])

const container = style([containerStyles.container])

const heading = style([
  sectionStyles.heading,
  {
    marginBottom: 0,
  },
])

const description = style({
  fontSize: '1rem',
  lineHeight: 1.5,
  opacity: 0.7,
  marginBottom: '3rem',
})

export { container, description, heading, section }
