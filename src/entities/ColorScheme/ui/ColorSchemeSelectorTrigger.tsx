import { THEME_ICON_MAP } from '@/shared/constants'
import { useStore } from '@nanostores/react'

import { $currentColorScheme, setCurrentColorScheme } from '../model'
import * as S from './ColorSchemeSelectorTrigger.styled'

const ColorSchemeSelectorTrigger = () => {
  const currentColorScheme = useStore($currentColorScheme)

  return (
    <S.Trigger
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'color-scheme-selector-trigger'}
      onClick={() => setCurrentColorScheme(currentColorScheme === 'dark' ? 'light' : 'dark')}
    >
      {THEME_ICON_MAP[currentColorScheme]}
    </S.Trigger>
  )
}

export { ColorSchemeSelectorTrigger }
