import { colorSchemeModel } from '@/entities/ColorScheme'
import { getTheme } from '@/shared/theme/utils/getTheme'
import { computed } from 'nanostores'

const $theme = computed([colorSchemeModel.$currentColorScheme], colorScheme =>
  getTheme(colorScheme)
)

export { $theme }
