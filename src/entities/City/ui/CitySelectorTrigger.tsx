import arrowIconId from '@/assets/images/svg/arrow.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import * as styles from './CitySelectorTrigger.css'

import { $currentCity } from '../model'

const CitySelectorTrigger = () => {
  const currentCity = useStore($currentCity)

  return (
    <button
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'current-city-selector-trigger'}
      className={styles.trigger}
    >
      {currentCity} <Icon id={arrowIconId} />
    </button>
  )
}

export { CitySelectorTrigger }
