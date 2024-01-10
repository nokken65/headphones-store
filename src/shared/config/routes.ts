import { createRoute } from 'atomic-router'

export const routes = {
  index: { path: '/', route: createRoute() },
  shop: { path: '/products/:category', route: createRoute<{ category: string }>() },
  product: {
    path: '/products/:category/:id',
    route: createRoute<{ category: string; id: string }>(),
  },

  notFound: { path: '/404', route: createRoute() },
}

export const routesConfig = [...Object.values(routes)]
