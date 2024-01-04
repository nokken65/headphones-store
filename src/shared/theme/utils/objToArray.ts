import { flatObject } from '@/shared/utils/flatObject'

const objToArray = (obj: Record<string, unknown>) =>
  [
    ...Object.entries(flatObject(obj, { delimiter: '-' })).map(([key, value]) => [key, value + '']),
  ] as [string, string][]

export { objToArray }
