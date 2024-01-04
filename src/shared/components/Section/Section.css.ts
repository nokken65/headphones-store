import { vars } from '@/shared/theme'
import { components } from '@/shared/theme/layers'
import { style } from '@vanilla-extract/css'

const section = style({
  '@layer': {
    [components]: {
      contentVisibility: 'auto',
      containIntrinsicSize: '1000px',
      backgroundColor: vars.colors.background,
      padding: '3rem clamp(1rem, 2dvw, 3rem)',
    },
  },
})

const heading = style({
  '@layer': {
    [components]: {
      fontSize: 'clamp(2.5rem, 8dvw, 4rem)',
      fontWeight: 700,
      marginBottom: 'clamp(1rem, 2dvw, 3rem)',
    },
  },
})

export { heading, section }
