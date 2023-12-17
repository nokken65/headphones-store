import { action, atom } from 'nanostores'

const $value = atom(22)

const increase = action($value, 'increase', store => store.set(store.get() + 1))
const decrease = action($value, 'decrease', store => store.set(store.get() - 1))

export const count = { $value, increase, decrease }
