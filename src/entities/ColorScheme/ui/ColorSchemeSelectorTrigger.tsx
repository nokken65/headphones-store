import { THEME_ICON_MAP } from '@/shared/constants'
import { useStore } from '@nanostores/react'

import { $currentColorScheme } from '../model'
import * as S from './ColorSchemeSelectorTrigger.styled'

const ColorSchemeSelectorTrigger = () => {
  const currentColorScheme = useStore($currentColorScheme)

  return <S.Trigger>{THEME_ICON_MAP[currentColorScheme]}</S.Trigger>
}

export { ColorSchemeSelectorTrigger }
