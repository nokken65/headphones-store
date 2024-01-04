import React from 'react'

import { useHover } from '@/shared/hooks/useHover'

import styles from './Marquee.module.css'

type MarqueeProps = {
  items: React.ReactNode[]
}

const _Marquee = ({ items }: MarqueeProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isPause = useHover(ref)

  return (
    <div className={styles.marquee} ref={ref}>
      <div
        className={styles.container}
        style={{ animationPlayState: isPause ? 'paused' : 'running' }}
      >
        <ul className={styles.list} role={'list'}>
          {items}
        </ul>
        <ul aria-hidden className={styles.list} role={'list'}>
          {items}
        </ul>
      </div>
    </div>
  )
}

export const Marquee = React.memo(_Marquee)
