import { containerStyles } from '@/shared/components/Container'
import { vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const header = recipe({
  base: {
    width: '100%',
    height: '4rem',
    zIndex: 1000,
    transition: 'background-color 0.1s ease-in-out, color 0.2s ease-in-out',
  },

  variants: {
    isInverted: {
      true: {
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: vars.colors.cardBackground,
        color: vars.colors.text,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      false: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'transparent',
        color: vars.colors.textContrast,
      },
    },
  },
})

const container = style([
  containerStyles.container,
  {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // gap: '1rem',
    padding: '0 1.5rem',
  },
])

const heading = style({
  fontSize: 'clamp(1rem, 2dvw, 2rem)',
  fontWeight: 700,
  textTransform: 'uppercase',
})

export { container, header, heading }
