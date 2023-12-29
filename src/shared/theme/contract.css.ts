import type { Theme } from './types'

import { createThemeContract } from '@vanilla-extract/css'

const vars = createThemeContract<Theme>({
  fontFamily: '',
  fontSize: '16px',
  radius: { xs: '0px', sm: '0px', md: '0px', lg: '0px', xl: '0px', '2xl': '0px', full: '0%' },
  spacing: {
    xs: '0px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
    '2xl': '0px',
    full: '0%',
    screenH: '0vh',
    screenW: '0vw',
  },
  colors: {
    accent: '',
    background: '',
    backgroundImageFallback: '',
    backgroundPale: '',
    cardBackground: '',
    cardBorder: '',
    link: '',
    text: '',
    textContrast: '',
    textInvert: '',
  },
})

export { vars }
