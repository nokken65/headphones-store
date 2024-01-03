import React from 'react'

import { AdvantageCard } from '@/entities/Advantage'
import { ADVANTAGES } from '@/entities/Advantage/mocks/advantages'
import { Marquee } from '@/shared/components/Marquee'
import { sectionStyles } from '@/shared/components/Section'

const _Advantages = () => {
  return (
    <section aria-labelledby={'advantages-heading'} className={sectionStyles.section}>
      <h2 className={sectionStyles.heading} id={'advantages-heading'}>
        Advantages
      </h2>
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
