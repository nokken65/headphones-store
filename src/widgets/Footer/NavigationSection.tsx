import React from 'react'

import { DisclosureContent, DisclosureTrigger, useDisclosure } from '@/shared/components/Disclosure'
import { useWindowSize } from '@uidotdev/usehooks'

import { LinksList } from './LinksList'
import * as S from './NavigationSection.styled'
import { LinkIcon, LinkText } from './model/models'

type NavigationSectionProps = {
  heading: string
  items: (LinkIcon[] | LinkText)[]
}

const NavigationSection = (props: NavigationSectionProps) => {
  const id = React.useId()
  const { width } = useWindowSize()

  if (width !== null && width >= 768) {
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
  const [_, { triggerProps, contentProps }] = useDisclosure()

  return (
    <nav aria-labelledby={id}>
      <S.Heading id={id}>
        <DisclosureTrigger {...triggerProps}>{heading}</DisclosureTrigger>
      </S.Heading>

      <DisclosureContent {...contentProps}>
        <LinksList items={items} />
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
    <nav aria-labelledby={id}>
      <S.Heading id={id}>{heading}</S.Heading>

      <LinksList items={items} />
    </nav>
  )
}

export { NavigationSection }
