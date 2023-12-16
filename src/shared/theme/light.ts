import { base } from './base'
import { colors } from './colors'
import { Theme } from './types'

const light: Theme = {
  ...base,
  colors: {
    accent: colors.red.DEFAULT,
    background: colors.grey[50],
    backgroundPale: colors.grey[100],
    text: colors.grey[900],
    textInvert: colors.grey[50],
    backgroundImageFallback: '#282536',
    link: colors.blue[500],
    textPale: colors.grey[400],
    cardBackground: colors.grey[100],
    cardBorder: colors.grey[200],
  },
}

export { light }
