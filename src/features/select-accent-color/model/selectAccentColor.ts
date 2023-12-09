import { AccentColorNames } from '@/shared/theme'
import { atom } from 'nanostores'

const $accentColor = atom<AccentColorNames>('red')

export { $accentColor }
