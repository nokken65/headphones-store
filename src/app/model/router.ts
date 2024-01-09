import { routesConfig } from '@/shared/config/routes'
import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'

const router = createHistoryRouter({ routes: routesConfig })

router.setHistory(createBrowserHistory())

export { router }
