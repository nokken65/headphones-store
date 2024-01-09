import { THEME_ICON_MAP } from '@/shared/constants'
import { useColorScheme } from '@/shared/theme/hooks/useColorScheme'

import classNames from './ColorSchemeSelectorTrigger.module.css'

const ColorSchemeSelectorTrigger = () => {
  const [currentColorScheme, setCurrentColorScheme] = useColorScheme()

  return (
    <button
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'color-scheme-selector-trigger'}
      className={classNames.trigger}
      onClick={() => setCurrentColorScheme(currentColorScheme === 'dark' ? 'light' : 'dark')}
    >
      {THEME_ICON_MAP[currentColorScheme]}
    </button>
  )
}

export { ColorSchemeSelectorTrigger }
