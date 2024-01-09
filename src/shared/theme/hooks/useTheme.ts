import React from 'react'

import { setCSSStyleSheet } from '@/shared/theme/utils/setCSSStyleSheet'

import { common } from '../themes/common'
import { getTheme } from '../utils/getTheme'
import { objToArray } from '../utils/objToArray'
import { useColorScheme } from './useColorScheme'

const useTheme = () => {
  const [colorScheme] = useColorScheme()

  React.useInsertionEffect(() => {
    setCSSStyleSheet({
      vars: objToArray(common),
      index: 0,
    })

    setCSSStyleSheet({
      vars: objToArray(getTheme(colorScheme)),
      index: 1,
    })

    document.documentElement.setAttribute('data-color-scheme', colorScheme)
  }, [colorScheme])
}

export { useTheme }
