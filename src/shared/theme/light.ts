import { base } from './base'
import { colors } from './colors'
import { Theme } from './types'

const light: Theme = {
  ...base,
  colors: {
    accent: colors.red.DEFAULT,
    background: colors.grey[50],
    text: colors.grey[900],
    textInvert: colors.grey[50],
  },
}

export { light }
