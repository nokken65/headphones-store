import arrowIconId from '@/assets/images/svg/arrow.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import { $currentCity } from '../model'
import * as S from './CitySelectorTrigger.styled'

const CitySelectorTrigger = () => {
  const currentCity = useStore($currentCity)

  return (
    <S.Trigger
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'current-city-selector-trigger'}
    >
      {currentCity} <Icon id={arrowIconId} />
    </S.Trigger>
  )
}

export { CitySelectorTrigger }
