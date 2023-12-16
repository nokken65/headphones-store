import React from 'react'

import autoIconId from '@/assets/images/svg/auto.svg'
import moonIconId from '@/assets/images/svg/moon.svg'
import sunIconId from '@/assets/images/svg/sun.svg'

import { dark, light } from '../theme'
import { Theme, ThemeNames } from '../theme/types'

const THEME_NAMES: ThemeNames[] = ['light', 'dark', 'auto'] as const

const THEME_MAP: Record<ThemeNames, Theme> = {
  auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light,
  dark: dark,
  light: light,
} as const

const THEME_ICON_MAP: Record<ThemeNames, React.JSX.Element> = {
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

export { THEME_ICON_MAP, THEME_MAP, THEME_NAMES }