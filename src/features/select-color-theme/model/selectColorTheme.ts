import type { AccentColorNames, Theme, ThemeNames } from '@/shared/theme/types'

import { selectAccentColorModel } from '@/features/select-accent-color'
import { colors } from '@/shared/theme'
import { dark } from '@/shared/theme/dark'
import { light } from '@/shared/theme/light'
import { persistentAtom } from '@nanostores/persistent'
import { produce } from 'immer'
import { computed } from 'nanostores'

const themeMapper: Record<ThemeNames, Theme> = {
  auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light,
  dark: dark,
  light: light,
}

const accentMapper: Record<AccentColorNames, string> = {
  blue: colors.blue.DEFAULT,
  cyan: colors.cyan.DEFAULT,
  red: colors.red.DEFAULT,
}

const $colorTheme = persistentAtom<ThemeNames>('color-theme', 'auto')

const $theme = computed([$colorTheme, selectAccentColorModel.$accentColor], (theme, accent) =>
  produce(themeMapper[theme], draft => {
    draft.colors.accent = accentMapper[accent]
  })
)

export { $colorTheme, $theme }
