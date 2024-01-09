import { createRoute } from 'atomic-router'

export const routes = {
  index: { path: '/', route: createRoute() },
  shop: { path: '/products', route: createRoute() },
  product: { path: '/products/:id', route: createRoute<{ id: string }>() },

  notFound: { path: '/404', route: createRoute() },
}

export const routesConfig = [...Object.values(routes)]
