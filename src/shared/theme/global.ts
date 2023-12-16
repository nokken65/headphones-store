import { createGlobalStyle } from 'styled-components'

import { backgroundImageMixin } from './backgroundImageMixin'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul { list-style: none }

  a {
    text-decoration: none;
    color: unset;

    &:visited {
      color: unset
    }
    &:hover {
      color: ${({ theme }) => theme.colors.link}
    }

    &[href^="tel:"] {
      text-decoration: underline;
      color: unset;

      &:visited {
        color: unset
      }
      &:hover {
        color: ${({ theme }) => theme.colors.link}
      }
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  #app-root {
    width: ${({ theme }) => theme.spacing.full};
    min-width: ${({ theme }) => theme.spacing.full};
    height: ${({ theme }) => theme.spacing.full};
    min-height: ${({ theme }) => theme.spacing.screenH};
    ${backgroundImageMixin}
  }
`

export { GlobalStyles }
