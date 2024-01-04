const isArray = <T>(v: unknown): v is Array<T> => !!v && v.constructor === Array

const isObject = <T>(v: unknown): v is Record<string, T> =>
  typeof v === 'object' && !isArray(v) && v !== null

export { isArray, isObject }
