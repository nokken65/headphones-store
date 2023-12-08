import { ReactNode } from 'react'

import { $theme } from '@/features/select-color-theme/model/selectColorTheme'
import { GlobalStyles } from '@/shared/theme/global'
import { useStore } from '@nanostores/react'
import { ThemeProvider } from 'styled-components'

export const withTheme = (children: () => ReactNode) => () => {
  const theme = useStore($theme)

  return (
    <ThemeProvider theme={theme}>
      {children()}
      <GlobalStyles />
    </ThemeProvider>
  )
}
