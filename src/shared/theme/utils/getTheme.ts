import type { ColorScheme, Theme } from '../types'

import { dark } from '../themes/dark'
import { light } from '../themes/light'

const getTheme = (scheme: ColorScheme) => {
  const themeMap: Record<ColorScheme, Partial<Theme>> = {
    auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light,
    dark,
    light,
  }

  return themeMap[scheme]
}

export { getTheme }
