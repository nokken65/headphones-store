import React from 'react'

import autoIconId from '@/assets/images/svg/auto.svg'
import moonIconId from '@/assets/images/svg/moon.svg'
import sunIconId from '@/assets/images/svg/sun.svg'

import { ColorScheme } from '../theme/types'

const THEME_ICON_MAP: Record<ColorScheme, React.JSX.Element> = {
  auto: (
    <svg height={18}>
      <use xlinkHref={`#${autoIconId}`}></use>
    </svg>
  ),
  dark: (
    <svg height={18}>
      <use xlinkHref={`#${moonIconId}`}></use>
    </svg>
  ),
  light: (
    <svg height={18}>
      <use xlinkHref={`#${sunIconId}`}></use>
    </svg>
  ),
} as const

export { THEME_ICON_MAP }
