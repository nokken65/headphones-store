import React from 'react'

import { colorSchemeModel } from '@/entities/ColorScheme'
import { useTheme } from '@/shared/theme/hooks/useTheme'
import { useStore } from '@nanostores/react'

export const withTheme = (children: () => React.ReactNode) => () => {
  const colorScheme = useStore(colorSchemeModel.$currentColorScheme)

  useTheme(colorScheme)

  return <>{children()}</>
}
