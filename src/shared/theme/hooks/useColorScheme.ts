import type { ColorScheme } from '../types'

import { useLocalStorage } from '@/shared/hooks/useLocalStorage'

const useColorScheme = () => {
  return useLocalStorage<ColorScheme>('color-scheme', 'auto')
}

export { useColorScheme }
