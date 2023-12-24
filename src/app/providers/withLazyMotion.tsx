import { ReactNode } from 'react'

import { LazyMotion } from 'framer-motion'

const loadFeatures = async () => import('./motionFeatures').then(res => res.default)

export const withLazyMotion = (children: () => ReactNode) => () => {
  return <LazyMotion features={loadFeatures}>{children()}</LazyMotion>
}
