import React from 'react'

import * as styles from './DisclosureContent.module.css'

type DisclosureContentProps = React.ComponentPropsWithoutRef<'div'> & { isExpanded: boolean }

const DisclosureContent = ({ children, isExpanded, ...props }: DisclosureContentProps) => {
  return (
    <div className={styles.content} data-is-expanded={isExpanded} {...props}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export { DisclosureContent }
