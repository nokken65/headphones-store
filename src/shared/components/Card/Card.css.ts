import { vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { style } from '@vanilla-extract/css'

const card = style({
  '@layer': {
    [components]: {
      padding: '1.5rem',
      backgroundColor: vars.colors.cardBackground,
      border: '1px solid',
      borderColor: vars.colors.cardBorder,
      borderRadius: '1rem',
    },
  },
})

export { card }
