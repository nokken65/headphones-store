import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: ${({ theme }) => theme.fontSize};
    }

    #app-root {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0;
        width: ${({ theme }) => theme.spacing.full};
        min-width: ${({ theme }) => theme.spacing.full};
        height: ${({ theme }) => theme.spacing.full};
    }
`

export { GlobalStyles }
