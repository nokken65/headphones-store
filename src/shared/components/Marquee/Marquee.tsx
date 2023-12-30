import React from 'react'

import * as styles from './Marquee.css'

type MarqueeProps = {
  items: React.ReactNode[]
}

const _Marquee = ({ items }: MarqueeProps) => {
  const [isPause, setIsPause] = React.useState(false)

  return (
    <div
      className={styles.marquee}
      onPointerEnter={() => setIsPause(true)}
      onPointerLeave={() => setIsPause(false)}
    >
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
