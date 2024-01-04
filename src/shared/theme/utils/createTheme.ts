import type { Theme } from '../types'

type CreateThemeConfig<Config> = Required<Config>

const createTheme = <Config extends Partial<Theme> = Theme>(
  config: CreateThemeConfig<Config>
): Partial<Config> => config

export { createTheme }
