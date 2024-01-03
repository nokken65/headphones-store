import { components } from '@/shared/theme/layers'
import { recipe } from '@vanilla-extract/recipes'

const trigger = recipe({
  base: {
    '@layer': {
      [components]: {
        cursor: 'pointer',
        width: '100%',
        minHeight: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0,

        transition: 'margin-bottom 0.2s linear',

        ':focus-visible': {
          outlineOffset: '0.2rem',
          outline: '2px solid orange',
        },
      },
    },
  },
  variants: {
    isExpanded: {
      true: {
        '@layer': {
          [components]: {
            marginBottom: '1rem',
          },
        },
      },
    },
  },
  defaultVariants: {
    isExpanded: false,
  },
})

const icon = recipe({
  base: {
    '@layer': {
      [components]: {
        width: '1.5rem',
        height: '1.5rem',
        transition: 'transform 0.2s linear',
      },
    },
  },
  variants: {
    isExpanded: {
      true: {
        '@layer': {
          [components]: {
            transform: 'rotateZ(45deg)',
          },
        },
      },
    },
  },
  defaultVariants: {
    isExpanded: false,
  },
})

export { icon, trigger }
