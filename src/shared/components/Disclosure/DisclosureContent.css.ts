import { components } from '@/shared/theme/layers'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const content = recipe({
  base: {
    '@layer': {
      [components]: {
        display: 'grid',
        transition: 'grid-template-rows 0.2s linear, margin-bottom 0.2s linear',
        gridTemplateRows: '0fr',
        marginBottom: '0rem',
      },
    },
  },
  variants: {
    isExpanded: {
      true: {
        '@layer': {
          [components]: {
            gridTemplateRows: '1fr',
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

const container = style({
  '@layer': {
    [components]: {
      overflow: 'hidden',
    },
  },
})

export { container, content }
