import { StringifyCSSVarsConfig, stringifyCSSVars } from './stringifyCSSVars'

const setCSSStyleSheet = async ({
  selector = ':root',
  vars,
  index = 0,
}: StringifyCSSVarsConfig & { index?: number }) => {
  const sheet = new CSSStyleSheet().replace(stringifyCSSVars({ selector, vars }))

  document.adoptedStyleSheets[index] = await sheet
}

export { setCSSStyleSheet }
