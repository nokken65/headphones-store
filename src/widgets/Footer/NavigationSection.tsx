import type { LinkIcon, LinkText } from './model/models'

import React from 'react'

import { DisclosureContent, DisclosureTrigger, useDisclosure } from '@/shared/components/Disclosure'
import { useWindowWidth } from '@/shared/hooks/useWindowWidth'

import * as styles from './NavigationSection.css'

import { LinksList } from './LinksList'

type NavigationSectionProps = {
  heading: string
  items: (LinkIcon[] | LinkText)[]
}

const NavigationSection = (props: NavigationSectionProps) => {
  const id = React.useId()
  const width = useWindowWidth()

  if (width >= 768) {
    return <NavigationSectionPlain {...props} id={id} />
  } else {
    return <NavigationSectionDisclosure {...props} id={id} />
  }
}

const NavigationSectionDisclosure = ({
  heading,
  items,
  id,
}: NavigationSectionProps & { id: string }) => {
  const [isExpanded, { triggerProps, contentProps }] = useDisclosure()

  return (
    <nav aria-labelledby={id} className={styles.navigationDisclosure}>
      <h3 className={styles.heading} id={id}>
        <DisclosureTrigger {...triggerProps}>{heading}</DisclosureTrigger>
      </h3>

      <DisclosureContent {...contentProps}>
        <LinksList items={items} tabIndex={isExpanded ? 0 : -1} />
      </DisclosureContent>
    </nav>
  )
}

const NavigationSectionPlain = ({
  heading,
  items,
  id,
}: NavigationSectionProps & { id: string }) => {
  return (
    <nav aria-labelledby={id} className={styles.navigation}>
      <h3 className={styles.heading} id={id}>
        {heading}
      </h3>

      <LinksList items={items} />
    </nav>
  )
}

export { NavigationSection }
