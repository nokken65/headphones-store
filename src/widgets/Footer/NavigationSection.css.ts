import { breakpoints } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const navigation = style({
  padding: '1rem 1rem',
  selectors: {
    '&:not(:last-of-type)': {
      borderBottom: '2px solid #fff',
      '@media': {
        [breakpoints.md]: {
          borderBottom: 'none',
        },
      },
    },
  },

  '@media': {
    [breakpoints.sm]: {
      padding: '1rem 3rem',
    },
    [breakpoints.md]: {
      padding: '0rem 0rem',
      ':first-of-type': {
        paddingLeft: '3rem',
      },
      ':last-of-type': {
        paddingRight: '3rem',
      },
    },
  },
})

const heading = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  width: '100%',
  '@media': {
    [breakpoints.md]: {
      marginBottom: '1rem',
    },
  },
})

export { heading, navigation }
