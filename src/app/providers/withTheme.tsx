import React from 'react'

import { useTheme } from '@/shared/theme/hooks/useTheme'

export const withTheme = (children: () => React.ReactNode) => () => {
  useTheme()

  return <>{children()}</>
}
