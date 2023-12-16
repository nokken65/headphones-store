import { useState } from 'react'

import { Button } from '@/shared/components/Button'
import { THEME_ICON_MAP, THEME_NAMES } from '@/shared/constants'
import { colors, light } from '@/shared/theme'
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

import { selectColorThemeModel } from '..'
import { $themeName } from '../model/selectColorTheme'

export const ColorThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => setIsOpen(prev => !prev)

  const { context, floatingStyles, refs } = useFloating({
    onOpenChange: setIsOpen,
    open: isOpen,
    placement: 'top',
    strategy: 'fixed',
    transform: false,
  })

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      transform: 'translateY(100%)',
    },
    close: {
      transform: 'translateY(100%)',
    },
    open: {
      transform: ' translateY(0)',
    },
  })

  const focus = useFocus(context)
  // const hover = useHover(context, { mouseOnly: true })

  const { getFloatingProps, getReferenceProps } = useInteractions([focus])
  const colorTheme = useStore($themeName)

  return (
    <>
      <Button
        onClick={toggleIsOpen}
        ref={refs.setReference}
        style={{ height: '48px', width: '48px', backdropFilter: 'blur(10px)' }}
        {...getReferenceProps()}
      >
        {THEME_ICON_MAP[colorTheme]}
      </Button>
      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            overflow: 'hidden',
            zIndex: -10,
            backdropFilter: 'blur(10px)',
            // backgroundColor: light.colors.accent,
            ...styles,
            ...floatingStyles,
          }}
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
                // zIndex: -1,
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
