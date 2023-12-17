import arrowIconId from '@/assets/images/svg/arrow.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import { $currentLanguage } from '../model'
import * as S from './LanguageSelectorTrigger.styled'

const LanguageSelectorTrigger = () => {
  const currentLanguage = useStore($currentLanguage)

  return (
    <S.Trigger>
      {currentLanguage} <Icon id={arrowIconId} />
    </S.Trigger>
  )
}

export { LanguageSelectorTrigger }
