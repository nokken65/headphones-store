import React from 'react'

import plusIconId from '@/assets/images/svg/plus.svg'

import * as styles from './DisclosureTrigger.module.css'

type DisclosureTriggerProps = React.ComponentPropsWithoutRef<'button'> & {
  isExpanded: boolean
  toggle: () => void
  show: () => void
  hide: () => void
}

const DisclosureTrigger = ({
  children,
  isExpanded,
  toggle,
  show,
  hide,
  ...props
}: DisclosureTriggerProps) => {
  return (
    <button
      className={styles.trigger}
      data-is-expanded={isExpanded}
      onClick={() => toggle()}
      {...props}
    >
      {children}
      <svg className={styles.icon} data-is-expanded={isExpanded}>
        <use xlinkHref={`#${plusIconId}`} />
      </svg>
    </button>
  )
}

export { DisclosureTrigger }
