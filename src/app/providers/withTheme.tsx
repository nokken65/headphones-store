import { ReactNode } from 'react'

import { selectColorThemeModel } from '@/features/select-color-scheme'
import { GlobalStyles } from '@/shared/theme/global'
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
