import type { ColorScheme } from '@/shared/theme/types'

import { persistentAtom } from '@nanostores/persistent'
import { action } from 'nanostores'

const $currentColorScheme = persistentAtom<ColorScheme>('color-theme', 'auto')

const setCurrentColorScheme = action(
  $currentColorScheme,
  'set-color-scheme',
  (store, newColorScheme: ColorScheme) => {
    store.set(newColorScheme)
  }
)

export { $currentColorScheme, setCurrentColorScheme }
