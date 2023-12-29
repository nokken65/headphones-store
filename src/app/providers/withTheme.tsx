import React from 'react'

import { selectColorSchemeModel } from '@/features/select-color-scheme'
import { usePrevious } from '@/shared/hooks/usePrevious'
import { useStore } from '@nanostores/react'

export const withTheme = (children: () => React.ReactNode) => () => {
  const theme = useStore(selectColorSchemeModel.$theme)
  const prevTheme = usePrevious(theme)

  React.useEffect(() => {
    if (prevTheme !== null) {
      document.body.classList.remove(prevTheme)
    }
    document.body.classList.add(theme)
  }, [prevTheme, theme])

  return <>{children()}</>
}
