import { ColorScheme } from '../theme'

const getColorScheme = (scheme: ColorScheme) => {
  const schemeMap: Record<ColorScheme, Exclude<ColorScheme, 'auto'>> = {
    auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    dark: 'dark',
    light: 'light',
  }

  return schemeMap[scheme]
}

export { getColorScheme }
