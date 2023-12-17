import { createGlobalStyle } from 'styled-components'

import { backgroundImage } from './mixins/backgroundImage'
import { headings } from './mixins/headings'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${headings}

  button {
    border:none;
    background-color: transparent;
    font-family: inherit;
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
    ${backgroundImage}
  }
`

export { GlobalStyles }
