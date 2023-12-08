import { KeyOf } from '../types/utils'

type ColorNames = 'blue' | 'cyan' | 'grey' | 'red'

type Color =
  | {
      '50'?: string
      '100'?: string
      '200'?: string
      '300'?: string
      '400'?: string
      '500'?: string
      '600'?: string
      '700'?: string
      '800'?: string
      '900'?: string
      DEFAULT?: string
    }
  | string

type ThemeNames = 'auto' | 'dark' | 'light'

type Theme = {
  colors?: {
    accent?: Color
    background?: Color
    text?: Color
    textInvert?: Color
  }
  defaultRadius?: KeyOf<Theme['radius']>
  defaultSpacing?: KeyOf<Theme['spacing']>
  fontFamily?: string
  fontSize?: string
  radius?: {
    '2xl'?: string
    full?: string
    lg?: string
    md?: string
    sm?: string
    xl?: string
    xs?: string
  }
  spacing?: {
    '2xl'?: string
    full?: string
    lg?: string
    md?: string
    sm?: string
    xl?: string
    xs?: string
  }
}

export type { Color, ColorNames, Theme, ThemeNames }
