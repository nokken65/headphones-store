import type { ColorScheme } from '../types'

import React from 'react'

import { setCSSStyleSheet } from '@/shared/theme/utils/setCSSStyleSheet'

import { common } from '../themes/common'
import { getTheme } from '../utils/getTheme'
import { objToArray } from '../utils/objToArray'

const COLOR_SCHEME_ATTRIBUTE_NAME = 'data-color-scheme' as const

const useTheme = (colorScheme: ColorScheme) => {
  React.useEffect(() => {
    setCSSStyleSheet({
      vars: objToArray(common),
      index: 0,
    })

    const mutationCallback = (records: MutationRecord[]) => {
      const record = records.find(record => record.attributeName === COLOR_SCHEME_ATTRIBUTE_NAME)

      if (!record) {
        return
      }

      const scheme = (record.target as HTMLElement).getAttribute(
        record.attributeName ?? ''
      ) as Exclude<ColorScheme, 'auto'> | null

      if (scheme === null) {
        return
      }

      setCSSStyleSheet({
        vars: objToArray(getTheme(scheme)),
        index: 1,
      })
    }

    const observer = new MutationObserver(mutationCallback)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [COLOR_SCHEME_ATTRIBUTE_NAME],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    document.documentElement.setAttribute(COLOR_SCHEME_ATTRIBUTE_NAME, colorScheme)
  }, [colorScheme])
}

export { useTheme }
