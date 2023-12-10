import { selectAccentColorModel } from '@/features/select-accent-color'
import { selectColorThemeModel } from '@/features/select-color-theme'
import { setCSSVariables } from '@/shared/utils/setCSSVariables'
import { computed, keepMount, onMount, onSet } from 'nanostores'

import { $isRevertedColors } from './revertColors'

const $storesRelatedToTheTheme = computed(
  [
    selectColorThemeModel.$themeName,
    selectColorThemeModel.$theme,
    $isRevertedColors,
    selectAccentColorModel.$accentColor,
  ],
  (themeName, theme, isRevertedColors, accentColor) => ({
    themeName,
    theme,
    isRevertedColors,
    accentColor,
  })
)

onMount($isRevertedColors, () => {
  setCSSVariables({
    vars: [
      ['--header-block-background-color', selectColorThemeModel.$theme.get().colors.background],
      ['--header-badge-background-color', selectColorThemeModel.$theme.get().colors.accent],
      ['--header-icon-color', selectColorThemeModel.$theme.get().colors.accent],
      ['--header-block-shadow', 'unset'],
    ],
  })

  const handler = (event: Event) => {
    $isRevertedColors.set((event.currentTarget as Window).scrollY > 54)
  }

  window.addEventListener('scroll', handler)
})

onSet(
  $storesRelatedToTheTheme,
  ({ newValue: { themeName, theme, isRevertedColors, accentColor } }) => {
    if (
      isRevertedColors !== $storesRelatedToTheTheme.get()?.isRevertedColors ||
      themeName !== $storesRelatedToTheTheme.get()?.themeName ||
      accentColor !== $storesRelatedToTheTheme.get()?.accentColor
    ) {
      setCSSVariables({
        vars: [
          [
            '--header-block-background-color',
            isRevertedColors ? theme.colors.accent : 'transparent',
          ],
          [
            '--header-badge-background-color',
            isRevertedColors ? theme.colors.text : theme.colors.accent,
          ],
          ['--header-icon-color', isRevertedColors ? theme.colors.textInvert : theme.colors.text],
          [
            '--header-block-shadow',
            isRevertedColors ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : 'unset',
          ],
        ],
      })
    }
  }
)

keepMount($storesRelatedToTheTheme)
