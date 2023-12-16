import React, { useState } from 'react'

import { useFloating, useFocus, useInteractions, useTransitionStyles } from '@floating-ui/react'

const _Popover = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { context, floatingStyles, refs } = useFloating({
    onOpenChange: setIsOpen,
    open: isOpen,
    placement: 'top',
    strategy: 'fixed',
    transform: true,
  })
  const { isMounted, styles } = useTransitionStyles(context)

  const focus = useFocus(context)
  // const hover = useHover(context, { mouseOnly: true })

  const { getFloatingProps, getReferenceProps } = useInteractions([focus])

  return <div>_Popover</div>
}

export const Popover = React.memo(_Popover)
