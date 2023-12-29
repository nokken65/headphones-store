type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

type ColorHEX = Record<ColorShade, `#${string}`>

type Color = ColorHEX

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

export type { Color, ColorHEX, ColorScheme, ColorShade, Theme }
