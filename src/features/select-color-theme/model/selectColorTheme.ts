import type { ThemeNames } from '@/shared/theme/types'

import { THEME_MAP } from '@/shared/constants'
import { persistentAtom } from '@nanostores/persistent'
import { computed } from 'nanostores'

const $themeName = persistentAtom<ThemeNames>('color-theme', 'auto')

const $theme = computed([$themeName], theme => THEME_MAP[theme])

export { $theme, $themeName }
