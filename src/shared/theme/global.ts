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

  *[data-invisible] {
    width:0 !important;
    height:0 !important;
    margin:0 !important;
    padding:0 !important;
    visibility: hidden !important;
  }

  
main,footer,header {
  overflow-x: hidden;
}

  button {
    border:none;
    background-color: transparent;
    font-family: inherit;
  }

  ul,ol { list-style: none }

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
    --scrollbar-width: calc(100vw - 100%);
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
