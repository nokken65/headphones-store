import { dark } from '@/shared/theme/dark'
import { light } from '@/shared/theme/light'
import { ThemeNames } from '@/shared/theme/types'
import { persistentAtom } from '@nanostores/persistent'
import { computed } from 'nanostores'

const mapper = {
  auto: () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light),
  dark: () => dark,
  light: () => light,
}

const $colorTheme = persistentAtom<ThemeNames>('color-theme', 'auto')

const $theme = computed($colorTheme, theme => mapper[theme])

export { $colorTheme, $theme }
