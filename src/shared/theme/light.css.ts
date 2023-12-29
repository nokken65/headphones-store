import type { Theme } from './types'

import { createTheme } from '@vanilla-extract/css'

import { vars } from './contract.css'

import { base } from './base'
import { colors } from './colors'

const lightClassName = createTheme(vars, {
  ...base,
  colors: {
    accent: colors.red[400],
    background: colors.grey[50],
    backgroundPale: colors.grey[100],
    text: colors.grey[900],
    textInvert: colors.grey[50],
    textContrast: colors.grey[50],
    backgroundImageFallback: '#282536',
    link: colors.red[400],
    cardBackground: colors.grey[100],
    cardBorder: colors.grey[200],
  },
} as Theme)

export { lightClassName }
