export type StringifyCSSVarsConfig = {
  selector?: string
  vars: Array<[string, string]>
}

export const stringifyCSSVars = ({ selector = ':root', vars }: StringifyCSSVarsConfig) =>
  `${selector}{${vars.reduce((acc, v) => `${acc}${v[0]}:${v[1]};`, '')}}`
