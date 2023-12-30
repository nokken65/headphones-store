import { breakpoints, vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { style } from '@vanilla-extract/css'

const section = style({
  "@layer": {
    [components]: {
      backgroundColor: vars.colors.background,
      padding: '3rem 1rem',
    
      '@media': {
        [breakpoints.sm]: {
          padding: '3rem 2rem',
        },
        [breakpoints.md]: {
          padding: '3rem',
        },
      },
    }
  }
})

const heading = style({
  "@layer": {
    [components]: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '2rem',
    
      '@media': {
        [breakpoints.md]: {
          marginBottom: '3rem',
        },
      },
    }
  }
})

export { heading, section }
