import { routes } from '@/shared/config/routes'
import { createRoutesView } from 'atomic-router-react'

import { Home } from './Home'
import Product from './Product.page'
import Shop from './Shop.page'

const Routing = createRoutesView({
  routes: [
    {
      route: routes.index.route,
      view: Home,
    },
    {
      route: routes.shop.route,
      view: Shop,
    },
    {
      route: routes.product.route,
      view: Product,
    },
  ],
})

export { Routing }
