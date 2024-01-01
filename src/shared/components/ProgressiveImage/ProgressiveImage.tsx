import type { Sources } from './types'

import React from 'react'

import { ProgressiveImageSources } from './ProgressiveImageSources'

type ProgressiveImageProps = React.ComponentPropsWithoutRef<'img'> & {
  sources: Sources
}

const ProgressiveImage = ({ sources, ...props }: ProgressiveImageProps) => {
  const { fallback, ...srcs } = sources

  return (
    <picture>
      <ProgressiveImageSources {...srcs} />
      <img src={sources.fallback} {...props} />
    </picture>
  )
}

export { ProgressiveImage }
