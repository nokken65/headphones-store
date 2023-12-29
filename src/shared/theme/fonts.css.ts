import { fontFace } from '@vanilla-extract/css'

const rubikFontFace = fontFace([
  {
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `local('Rubik'),
        url('/assets/fonts/Rubik-Regular.woff2') format('woff2'),
        url('/assets/fonts/Rubik-Regular.woff') format('woff'),
        url('/assets/fonts/Rubik-Regular.ttf') format('truetype')`,
  },
  {
    fontWeight: 500,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `local('Rubik'),
      url('/assets/fonts/Rubik-Medium.woff2') format('woff2'),
      url('/assets/fonts/Rubik-Medium.woff') format('woff'),
      url('/assets/fonts/Rubik-Medium.ttf') format('truetype')`,
  },
  {
    fontWeight: 700,
    fontStyle: 'normal',
    fontDisplay: 'swap',
    src: `local('Rubik'),
      url('/assets/fonts/Rubik-Bold.woff2') format('woff2'),
      url('/assets/fonts/Rubik-Bold.woff') format('woff'),
      url('/assets/fonts/Rubik-Bold.ttf') format('truetype')`,
  },
])

export { rubikFontFace }
