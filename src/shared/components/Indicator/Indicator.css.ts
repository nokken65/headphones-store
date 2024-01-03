import { vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { recipe } from '@vanilla-extract/recipes'

const indicator = recipe({
  base: {
    '@layer': {
      [components]: {
        padding: '0.15rem',
        borderRadius: '50%',
        color: vars.colors.textInvert,
        backgroundColor: vars.colors.text,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        fontSize: '0.75rem',
        fontWeight: 500,
        position: 'absolute',
      },
    },
  },
  variants: {
    position: {
      'top-left': {
        top: 0,
        left: 0,
      },
      'top-right': {
        top: 0,
        right: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
    },
  },
  defaultVariants: {
    position: 'top-right',
  },
})

export { indicator }
