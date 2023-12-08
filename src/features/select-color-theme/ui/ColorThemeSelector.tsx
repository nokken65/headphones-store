import { ThemeNames } from '@/shared/theme/types'

import { $colorTheme } from '../model/selectColorTheme'

const THEMES: ThemeNames[] = ['light', 'dark', 'auto']

export const ColorThemeSelector = () => {
  return (
    <div>
      <p>{$colorTheme.get()}</p>
      {THEMES.map(theme => (
        <button key={theme} onClick={() => $colorTheme.set(theme)}>
          {theme}
        </button>
      ))}
    </div>
  )
}
