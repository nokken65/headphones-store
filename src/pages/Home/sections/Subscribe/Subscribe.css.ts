import { containerStyles } from '@/shared/components/Container'
import { sectionStyles } from '@/shared/components/Section'
import { style } from '@vanilla-extract/css'

const container = style([
  containerStyles.container,
  {
    textAlign: 'center',
  },
])

const heading = style([
  sectionStyles.heading,
  {
    fontSize: 'clamp(1.5rem, 8dvw, 2.5rem)',
    marginBottom: 0,
  },
])

const description = style({
  lineHeight: 1.5,
  opacity: 0.7,
  margin: '0 0 3rem',
})

export { container, description, heading }
