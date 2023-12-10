import type { ThemeNames } from '@/shared/theme/types'

import { selectAccentColorModel } from '@/features/select-accent-color'
import { ACCENT_COLOR_MAP, THEME_MAP } from '@/shared/constants'
import { persistentAtom } from '@nanostores/persistent'
import { produce } from 'immer'
import { computed } from 'nanostores'

const $themeName = persistentAtom<ThemeNames>('color-theme', 'auto')

const $theme = computed([$themeName, selectAccentColorModel.$accentColor], (theme, accent) =>
  produce(THEME_MAP[theme], draft => {
    draft.colors.accent = ACCENT_COLOR_MAP[accent]
  })
)

export { $theme, $themeName }
