import { base } from './base'
import { colors } from './colors'
import { Theme } from './types'

const dark: Theme = {
  ...base,
  colors: {
    accent: colors.red.DEFAULT,
    background: colors.grey[600],
    text: colors.grey[50],
    textInvert: colors.grey[900],
    headerContent: colors.grey[900],
  },
}

export { dark }
