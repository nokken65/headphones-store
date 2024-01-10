import React from 'react'

import { DisclosureContent, DisclosureTrigger, useDisclosure } from '@/shared/components/Disclosure'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

import styles from './NavigationSection.module.css'

import { NavLink } from '../model/models'
import { LinksList } from './LinksList'

type NavigationSectionProps = {
  heading: string
  items: NavLink[]
}

const NavigationSection = ({ heading, items }: NavigationSectionProps) => {
  const id = React.useId()
  const isWideScreen = useMediaQuery('(min-width: 768px)')

  const [isExpanded, { triggerProps, contentProps }] = useDisclosure()

  return (
    <nav
      aria-labelledby={id}
      className={isWideScreen ? styles.navigation : styles.navigationDisclosure}
    >
      <h3 className={styles.heading} id={id}>
        {isWideScreen ? (
          heading
        ) : (
          <DisclosureTrigger {...triggerProps}>{heading}</DisclosureTrigger>
        )}
      </h3>
      {isWideScreen ? (
        <LinksList items={items} />
      ) : (
        <DisclosureContent {...contentProps}>
          <LinksList items={items} tabIndex={isExpanded ? 0 : -1} />
        </DisclosureContent>
      )}
    </nav>
  )
}

export { NavigationSection }
