import type { ReactNode } from 'react'

import { RouterProvider } from 'atomic-router-react'

import { router } from '../model'

export const withRouter = (component: () => ReactNode) => () => (
  <RouterProvider router={router}>{component()}</RouterProvider>
)
