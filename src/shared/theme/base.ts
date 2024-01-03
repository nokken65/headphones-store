import type { Theme } from './types'

const base: Omit<Theme, 'colors'> = {
  fontFamily: `Rubik,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif`,
  fontSize: '16px',
  radius: {
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '100%',
  },
  spacing: {
    xs: '8px',
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    full: '100%',
    screenW: '100vw',
    screenH: '100vh',
  },
}

export { base }
