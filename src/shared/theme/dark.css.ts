import type { Theme } from '.'

import { createTheme } from '@vanilla-extract/css'

import { vars } from './contract.css'

import { base } from './base'
import { colors } from './colors'

const darkClassName = createTheme(vars, {
  ...base,
  colors: {
    accent: colors.red[400],
    background: colors.grey[900],
    backgroundPale: colors.grey[800],
    text: colors.grey[50],
    textInvert: colors.grey[900],
    textContrast: colors.grey[50],
    backgroundImageFallback: '#282536',
    link: colors.red[600],
    cardBackground: colors.grey[800],
    cardBorder: colors.grey[700],
  },
} as Theme)

export { darkClassName }
