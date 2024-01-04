import React from 'react'

import { SubscribeToNewslettersForm } from '@/features/subscribe-to-newsletters'
import { containerStyles } from '@/shared/components/Container'
import { sectionStyles } from '@/shared/components/Section'
import clsx from 'clsx'

import styles from './Subscribe.module.css'

const _Subscribe = () => {
  return (
    <section aria-labelledby={'subscribe-heading'} className={sectionStyles.section}>
      <div className={clsx(containerStyles.container, styles.container)}>
        <h2 className={clsx(sectionStyles.heading, styles.heading)} id={'subscribe-heading'}>
          Subscribe to our newsletters
        </h2>
        <p className={styles.description}>
          Join our mailing list to receive exclusive offers, promotions & product updates!
        </p>
        <SubscribeToNewslettersForm />
      </div>
    </section>
  )
}

export const Subscribe = React.memo(_Subscribe)
