import { pipe } from 'ramda'

import { withLazyMotion } from './withLazyMotion'
import { withTheme } from './withTheme'

export const withProviders = pipe(withTheme, withLazyMotion)
