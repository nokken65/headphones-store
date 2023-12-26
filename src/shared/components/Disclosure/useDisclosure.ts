import React from 'react'

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

export { useDisclosure }
