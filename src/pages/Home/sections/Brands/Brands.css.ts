import { sectionStyles } from '@/shared/components/Section'
import { style } from '@vanilla-extract/css'

const section = style([sectionStyles.section, {}])
const heading = style([sectionStyles.heading, {}])

export { heading, section }
