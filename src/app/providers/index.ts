import { compose } from 'ramda'

import { withTheme } from './withTheme'

export const withProviders = compose(withTheme)
