import React from 'react'

import { AdvantageCard } from '@/entities/Advantage'
import { ADVANTAGES } from '@/entities/Advantage/mocks/advantages'
import { Marquee } from '@/shared/components/Marquee'

import * as styles from './Advantages.css'

const _Advantages = () => {
  return (
    <section aria-label={'Advantages'} className={styles.section}>
      <Marquee
        items={ADVANTAGES.map(item => (
          <li key={item.id}>
            <AdvantageCard {...item} />
          </li>
        ))}
      />
    </section>
  )
}

export const Advantages = React.memo(_Advantages)
