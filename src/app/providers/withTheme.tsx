import React, { ReactNode } from 'react'

import { dark } from '@/shared/theme/dark'
import { GlobalStyles } from '@/shared/theme/global'
import { light } from '@/shared/theme/light'
import { ThemeProvider } from 'styled-components'

export const withTheme = (children: () => ReactNode) => () => {
  const [theme, setTheme] = React.useState('light')

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>toggle theme</button>
      {children()}
      <GlobalStyles />
    </ThemeProvider>
  )
}
