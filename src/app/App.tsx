/* eslint-disable perfectionist/sort-imports */
import '@/shared/theme/styles/reset.css'
import '@/shared/theme/styles/global.css'

import { Routing } from '@/pages/Routing'

import { withProviders } from './providers'

const _App = () => {
  return <Routing />
}

const App = withProviders(_App)

export { App }
