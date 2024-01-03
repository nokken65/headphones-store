import arrowIconId from '@/assets/images/svg/arrow.svg'
import { Icon } from '@/shared/components/Icon'
import { useStore } from '@nanostores/react'

import * as styles from './LanguageSelectorTrigger.css'

import { $currentLanguage } from '../model'

const LanguageSelectorTrigger = () => {
  const currentLanguage = useStore($currentLanguage)

  return (
    <button
      aria-controls={'id'}
      aria-expanded={false}
      aria-haspopup={'listbox'}
      aria-label={'current-language-selector-trigger'}
      className={styles.trigger}
    >
      {currentLanguage} <Icon id={arrowIconId} />
    </button>
  )
}

export { LanguageSelectorTrigger }
