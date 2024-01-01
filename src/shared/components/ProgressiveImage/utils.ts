import type { SourceSizes, SourceSrcSet } from './types'

const isValidateFormat = (format: string, srcSet: SourceSrcSet) =>
  Object.values(srcSet).every(src => src.includes(`.${format}`))

const getSrcSetString = (srcSet: SourceSrcSet) =>
  Object.entries(srcSet).reduce(
    (str, [key, src], index, arr) => `${str}${src} ${key}${index !== arr.length - 1 ? ', ' : ''}`,
    ''
  )

const getSizesString = (sizes: SourceSizes) =>
  sizes.reduce(
    (str, size, index, arr) => `${str}${size}${index !== arr.length - 1 ? ', ' : ''}`,
    ''
  )

export { getSizesString, getSrcSetString, isValidateFormat }
