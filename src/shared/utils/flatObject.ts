import { isArray, isObject } from './is'
import { kebabize } from './kebabize'

type FlatObjectConfig = {
  delimiter?: string
  maxDepth?: number
  transformKey?: (key: string) => string
}

const flatObject = <T>(target: Record<string, T>, config: FlatObjectConfig) => {
  const { delimiter, maxDepth, transformKey }: Required<FlatObjectConfig> = {
    delimiter: '.',
    maxDepth: 50,
    transformKey: kebabize,
    ...config,
  }

  const output: Record<string, unknown> = {}

  const step = (obj: Record<string, unknown>, prev: string = '', currentDepth: number = 1) => {
    if (isArray(obj)) {
      obj.forEach((item, index) =>
        step(item as Record<string, unknown>, `${prev}${delimiter}${index}`, currentDepth)
      )

      return
    }

    if (isObject(obj)) {
      Object.keys(obj).forEach(key => {
        const value = obj[key]
        const newKey = `${prev}${prev ? delimiter : ''}${transformKey(key)}`

        if (isArray(value)) {
          value.forEach((item, index) =>
            step(item as Record<string, unknown>, `${newKey}${delimiter}${index}`, currentDepth)
          )

          return
        }

        if (
          !isArray(value) &&
          isObject(value) &&
          Object.keys(value).length &&
          currentDepth < maxDepth
        ) {
          step(value, newKey, currentDepth + 1)

          return
        }

        output[newKey] = value
      })

      return
    }

    output[prev] = obj
  }

  step(target)

  return output
}

export { flatObject }
