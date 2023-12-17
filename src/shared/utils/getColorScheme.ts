import { ThemeNames } from '../theme'

const getColorScheme = (scheme: ThemeNames) => {
  const schemeMap: Record<ThemeNames, Exclude<ThemeNames, 'auto'>> = {
    auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    dark: 'dark',
    light: 'light',
  }

  return schemeMap[scheme]
}

export { getColorScheme }
