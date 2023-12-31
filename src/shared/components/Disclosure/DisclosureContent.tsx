import React from 'react'

import * as styles from './DisclosureContent.css'

type DisclosureContentProps = React.ComponentPropsWithoutRef<'div'> & { isExpanded: boolean }

const DisclosureContent = ({ children, isExpanded, ...props }: DisclosureContentProps) => {
  return (
    <div className={styles.content({ isExpanded })} {...props}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export { DisclosureContent }
