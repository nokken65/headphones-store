import { sectionStyles } from '@/shared/components/Section'
import { style } from '@vanilla-extract/css'

const section = style({
  textAlign: 'center',
})

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

export { description, heading, section }
