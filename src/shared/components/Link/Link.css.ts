import { vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { style } from '@vanilla-extract/css'

const link = style({
  '@layer': {
    [components]: {
      cursor: 'pointer',
      ':hover': {
        color: vars.colors.link,
      },
      selectors: {
        [`&[href^="tel:"]`]: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

export { link }
