import { Routing } from '@/pages/Routing'

import { withProviders } from './providers'

const _App = () => {
  return <Routing />
}

const App = withProviders(_App)

export { App }
