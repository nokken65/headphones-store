import { pipe } from 'ramda'

import { withRouter } from './withRouter'
import { withTheme } from './withTheme'

export const withProviders = pipe(withRouter, withTheme)
