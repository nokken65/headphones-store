import { colors } from '../colors'
import { createTheme } from '../utils/createTheme'

const light = createTheme({
  colors: {
    accent: colors.red[400],
    background: colors.grey[50],
    backgroundPale: colors.grey[100],
    text: colors.grey[900],
    textInvert: colors.grey[50],
    textContrast: colors.grey[50],
    backgroundImageFallback: '#282536',
    link: colors.red[600],
    cardBackground: colors.grey[100],
    cardBorder: colors.grey[200],
  },
})

export { light }
