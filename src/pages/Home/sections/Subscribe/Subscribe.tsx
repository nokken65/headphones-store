import React from 'react'

import { SubscribeToNewslettersForm } from '@/features/subscribe-to-newsletters'

import * as styles from './Subscribe.css'
import { description } from './Subscribe.css'

const _Subscribe = () => {
  return (
    <section aria-labelledby={'subscribe-heading'} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading} id={'subscribe-heading'}>
          Subscribe to our newsletters
        </h2>
        <p className={description}>
          Join our mailing list to receive exclusive offers, promotions & product updates!
        </p>
        <SubscribeToNewslettersForm />
      </div>
    </section>
  )
}

export const Subscribe = React.memo(_Subscribe)
