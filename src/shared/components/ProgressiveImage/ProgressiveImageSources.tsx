import type { Source, Sources } from './types'

import React from 'react'

import { getSizesString, getSrcSetString, isValidateFormat } from './utils'

type ProgressiveImageSourcesProps = Omit<Sources, 'fallback'>

const ProgressiveImageSources = (sources: ProgressiveImageSourcesProps) => {
  if (Object.keys(sources).length === 0) {
    return null
  }

  return (
    <>
      {Object.entries(sources).map(([format, source], index) =>
        getImageSource(source, format, index)
      )}
    </>
  )
}

export { ProgressiveImageSources }

function getImageSource(source: Source | Source[], format: string, key: number): React.ReactNode {
  if (Array.isArray(source)) {
    return source.map((src, index) => getImageSource(src, format, key + index))
  } else {
    if (Object.keys(source.srcSet).length === 0) {
      return null
    }
    if (!isValidateFormat(format, source.srcSet)) {
      throw new Error(`All images of ${JSON.stringify(source.srcSet)} must be ".${format}"`)
    }

    return (
      <source
        key={key}
        media={source.media}
        sizes={source.sizes && source.sizes.length > 0 ? getSizesString(source.sizes) : undefined}
        srcSet={getSrcSetString(source.srcSet)}
        type={`image/${format}`}
      />
    )
  }
}
