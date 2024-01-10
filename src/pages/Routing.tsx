import { routes } from '@/shared/config/routes'
import { createRoutesView } from 'atomic-router-react'

import { Home } from './Home'
import Product from './Product.page'
import Shop from './Shop.page'
import { DefaultLayout } from './layouts/Default'

const Routing = createRoutesView({
  routes: [
    {
      route: routes.index.route,
      view: Home,
      layout: DefaultLayout,
    },
    {
      route: routes.shop.route,
      view: Shop,
      layout: DefaultLayout,
    },
    {
      route: routes.product.route,
      view: Product,
      layout: DefaultLayout,
    },
  ],
})

export { Routing }
