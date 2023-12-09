import { ReactNode } from 'react'

import { selectColorThemeModel } from '@/features/select-color-theme'
import { GlobalStyles } from '@/shared/theme'
import { useStore } from '@nanostores/react'
import { ThemeProvider } from 'styled-components'

export const withTheme = (children: () => ReactNode) => () => {
  const theme = useStore(selectColorThemeModel.$theme)

  return (
    <ThemeProvider theme={theme}>
      {children()}
      <GlobalStyles />
    </ThemeProvider>
  )
}