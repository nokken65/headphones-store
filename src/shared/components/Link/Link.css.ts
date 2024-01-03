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
        color: vars.colors.link,
        outlineOffset: '0.1rem',
        outline: '2px solid orange',
      },
      position: 'relative',
      ':before': {
        content: '',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: vars.colors.text,
      },
      ':after': {
        content: '',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '0%',
        height: '2px',
        backgroundColor: vars.colors.link,

        transition: 'width 0.2s ease-in-out',
      },
      selectors: {
        '&:hover:after, &:focus-visible:after': {
          right: 'unset',
          left: 0,
          width: '100%',
        },
        '&:has(svg):before': {
          display: 'none',
        },
      },
    },
  },
})

export { link }
