import { colorSchemeModel } from '@/entities/ColorScheme'
import { THEME_MAP } from '@/shared/constants'
import { computed } from 'nanostores'

const $theme = computed([colorSchemeModel.$currentColorScheme], theme => THEME_MAP[theme])

export { $theme }
