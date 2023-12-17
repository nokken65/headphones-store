type Color = {
  '50': string
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
  '800': string
  '900': string
  DEFAULT: string
}

type ColorNames = 'blue' | 'grey' | 'red'

type ColorScheme = 'auto' | 'dark' | 'light'

type Px = `${number}px`
type Rem = `${number}rem`
type Em = `${number}em`
type Percent = `${number}%`
type Vw = `${number}vw`
type Vh = `${number}vh`

type Unit = Em | Percent | Px | Rem | Vh | Vw

type Theme = {
  colors: {
    background: string
    backgroundImageFallback: string
    backgroundPale: string
    text: string
    textPale: string
    textInvert: string
    textContrast: string
    link: string
    accent: string
    cardBackground: string
    cardBorder: string
  }
  fontFamily: string
  fontSize: Px
  radius: {
    xs: Unit
    sm: Unit
    md: Unit
    lg: Unit
    xl: Unit
    '2xl': Unit
    full: Percent
  }
  spacing: {
    xs: Unit
    sm: Unit
    md: Unit
    lg: Unit
    xl: Unit
    '2xl': Unit
    full: Percent
    screenW: Vw
    screenH: Vh
  }
}

export type { Color, ColorNames, ColorScheme, Theme }
