import autoIconId from '@/assets/images/svg/auto.svg'
import moonIconId from '@/assets/images/svg/moon.svg'
import sunIconId from '@/assets/images/svg/sun.svg'

import { blueGradient, colors, cyanGradient, dark, light, redGradient } from '../theme'
import { AccentColorNames, Theme, ThemeNames } from '../theme/types'

const HEADER_HEIGHT: number = 48 as const

const THEME_NAMES: ThemeNames[] = ['light', 'dark', 'auto'] as const

const THEME_MAP: Record<ThemeNames, Theme> = {
  auto: window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light,
  dark: dark,
  light: light,
} as const

const ACCENT_COLOR_MAP: Record<AccentColorNames, string> = {
  blue: colors.blue.DEFAULT,
  cyan: colors.cyan['700'],
  red: colors.red.DEFAULT,
} as const

const ACCENT_COLOR_GRADIENTS_MAP: Record<AccentColorNames, string> = {
  blue: blueGradient,
  cyan: cyanGradient,
  red: redGradient,
} as const

const THEME_ICON_MAP: Record<ThemeNames, JSX.Element> = {
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

export {
  ACCENT_COLOR_GRADIENTS_MAP,
  ACCENT_COLOR_MAP,
  HEADER_HEIGHT,
  THEME_ICON_MAP,
  THEME_MAP,
  THEME_NAMES,
}
