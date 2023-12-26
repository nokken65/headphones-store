import { base } from './base'
import { colors } from './colors'
import { Theme } from './types'

const dark: Theme = {
  ...base,
  colors: {
    accent: colors.red.DEFAULT,
    background: colors.grey[800],
    backgroundPale: colors.grey[700],
    text: colors.grey[50],
    textInvert: colors.grey[900],
    textContrast: colors.grey[50],
    backgroundImageFallback: '#282536',
    link: colors.red.DEFAULT,
    cardBackground: colors.grey[700],
    cardBorder: colors.grey[600],
  },
}

export { dark }
