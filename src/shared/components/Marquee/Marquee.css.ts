import { vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { keyframes, style } from '@vanilla-extract/css'

const marqueeKeyframes = keyframes({
  '0%': {
    transform: 'translateX(0%)',
  },
  '100%': {
    transform: 'translateX(-50%)',
  },
})

const marquee = style({
  '@layer': {
    [components]: {
      overflowX: 'hidden',
      display: 'flex',
      position: 'relative',
      selectors: {
        '&:before, &:after': {
          content: '',
          position: 'absolute',
          top: 0,
          height: '100%',
          width: 'clamp(2rem, 5dvw, 5rem)',
          zIndex: 2,
        },
        '&:before': {
          left: 0,
          backgroundImage: `linear-gradient(
          to right,
          ${vars.colors.background},
          transparent
        )`,
        },
        '&:after': {
          right: 0,
          backgroundImage: `linear-gradient(
        to left,
        ${vars.colors.background},
          transparent
        )`,
        },
      },
    },
  },
})

const container = style({
  '@layer': {
    [components]: {
      display: 'flex',
      animationDuration: '60s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationName: marqueeKeyframes,
    },
  },
})

const list = style({
  '@layer': {
    [components]: {
      display: 'flex',
      gap: '1.5rem',
      marginRight: '1.5rem',
    },
  },
})

export { container, list, marquee }
