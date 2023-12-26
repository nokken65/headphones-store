import React from 'react'

import plusIconId from '@/assets/images/svg/plus.svg'

import * as S from './Disclosure.styled'

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
    <S.DisclosureTrigger $isExpanded={isExpanded} onClick={() => toggle()} {...props}>
      {children}
      <S.DisclosureTriggerIcon $isExpanded={isExpanded}>
        <use xlinkHref={`#${plusIconId}`} />
      </S.DisclosureTriggerIcon>
    </S.DisclosureTrigger>
  )
}

type DisclosureContentProps = React.ComponentPropsWithoutRef<'div'> & { isExpanded: boolean }

const DisclosureContent = ({ children, isExpanded, ...props }: DisclosureContentProps) => {
  return (
    <S.DisclosureContent {...props} $isExpanded={isExpanded}>
      <div>{children}</div>
    </S.DisclosureContent>
  )
}

const useDisclosure = () => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const triggerId = React.useId()
  const contentId = React.useId()

  const toggle = () => setIsExpanded(prev => !prev)
  const show = () => setIsExpanded(true)
  const hide = () => setIsExpanded(false)

  const triggerProps = React.useMemo(
    () => ({
      key: `header-${triggerId}`,
      'aria-controls': contentId,
      'aria-expanded': isExpanded,
      type: 'button' as const,
      id: triggerId,
      isExpanded,
      toggle,
      show,
      hide,
    }),
    [triggerId, contentId, isExpanded]
  )

  const contentProps = React.useMemo(
    () => ({
      'aria-labelledby': triggerId,
      role: 'region',
      id: contentId,
      key: `content-${contentId}`,
      isExpanded,
    }),
    [triggerId, isExpanded, contentId]
  )

  return [isExpanded, { triggerProps, contentProps }] as const
}

export { DisclosureContent, DisclosureTrigger, useDisclosure }
