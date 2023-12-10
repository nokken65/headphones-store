import { useState } from 'react'

import { Button } from '@/shared/components/Button'
import { THEME_ICON_MAP, THEME_NAMES } from '@/shared/constants'
import { ThemeNames } from '@/shared/theme/types'
import {
  FloatingPortal,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useTransitionStyles,
} from '@floating-ui/react'
import { useStore } from '@nanostores/react'

import { $themeName } from '../model/selectColorTheme'

export const ColorThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(prev => !prev)

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
  const colorTheme = useStore($themeName)

  return (
    <>
      <Button
        onClick={toggleIsOpen}
        ref={refs.setReference}
        style={{ height: '48px', width: '48px' }}
        {...getReferenceProps()}
      >
        {THEME_ICON_MAP[colorTheme]}
      </Button>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{ borderRadius: '12px', overflow: 'hidden', ...floatingStyles, ...styles }}
          {...getFloatingProps()}
        >
          {THEME_NAMES.filter(t => t !== colorTheme).map(theme => (
            <Button
              key={theme}
              onClick={() => $themeName.set(theme)}
              style={{
                backgroundColor: 'var(--header-block-background-color)',
                height: '48px',
                width: '48px',
              }}
            >
              {THEME_ICON_MAP[theme]}
            </Button>
          ))}
        </div>
      )}
    </>
  )
}
