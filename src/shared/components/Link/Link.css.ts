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
      ':focus-visible': {
        outlineOffset: '0.1rem',
        outline: '2px solid orange',
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
