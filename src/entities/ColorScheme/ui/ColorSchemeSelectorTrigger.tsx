import { THEME_ICON_MAP } from '@/shared/constants'
import { useStore } from '@nanostores/react'

import * as styles from './ColorSchemeSelectorTrigger.css'

import { $currentColorScheme, setCurrentColorScheme } from '../model'

const ColorSchemeSelectorTrigger = () => {
  const currentColorScheme = useStore($currentColorScheme)

  return (
    <button
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'color-scheme-selector-trigger'}
      className={styles.trigger}
      onClick={() => setCurrentColorScheme(currentColorScheme === 'dark' ? 'light' : 'dark')}
    >
      {THEME_ICON_MAP[currentColorScheme]}
    </button>
  )
}

export { ColorSchemeSelectorTrigger }
