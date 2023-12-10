import { StringifyCSSVarsConfig, stringifyCSSVars } from './stringifyCSSVars'

const setCSSVariables = async ({ selector = ':root', vars }: StringifyCSSVarsConfig) => {
  const sheet = new CSSStyleSheet().replace(stringifyCSSVars({ selector, vars }))

  document.adoptedStyleSheets = [await sheet]
}

export { setCSSVariables }
