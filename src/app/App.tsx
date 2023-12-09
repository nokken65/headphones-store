import { Home } from '@/pages/Home'

import { withProviders } from './providers'

const _App = () => {
  return <Home />
}

export const App = withProviders(_App)
