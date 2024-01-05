import React from 'react'

import { useHover } from '@/shared/hooks/useHover'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
import clsx from 'clsx'

import styles from './Marquee.module.css'

type MarqueeProps = {
  items: React.ReactNode[]
  direction?: 'left' | 'right'
  duration?: `${number}s`
}

const _Marquee = ({ items, direction = 'left', duration = '150s' }: MarqueeProps) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null)
  const listRef = React.useRef<HTMLUListElement>(null)
  const isPrefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const isPause = useHover(marqueeRef)

  React.useEffect(() => {
    const marquee = marqueeRef.current
    const list = listRef.current

    if (marquee === null || list === null) {
      return
    }

    const listItems = Array.from(list.children)

    if (isPrefersReducedMotion) {
      listItems
        .filter(node => node.getAttribute('aria-hidden') === 'true')
        .forEach(node => node.remove())
    } else {
      if (listItems.length >= items.length * 2) {
        return
      }

      listItems.forEach(node => {
        const duplicated = node.cloneNode(true) as HTMLElement

        duplicated.setAttribute('aria-hidden', 'true')

        list.appendChild(duplicated)
      })
    }
  }, [isPrefersReducedMotion, items.length])

  return (
    <div className={styles.marquee} data-animated={!isPrefersReducedMotion} ref={marqueeRef}>
      <ul
        className={clsx(styles.list)}
        ref={listRef}
        role={'list'}
        style={
          {
            '--animation-play-state': isPause ? 'paused' : 'running',
            '--animation-duration': duration,
            '--animation-direction': direction,
          } as React.CSSProperties
        }
      >
        {items}
      </ul>
    </div>
  )
}

export const Marquee = React.memo(_Marquee)
