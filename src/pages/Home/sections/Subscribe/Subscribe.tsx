import React from 'react'

import { Section } from '@/shared/components/Section'

import * as styles from './Subscribe.css'
import { description } from './Subscribe.css'

const _Subscribe = () => {
  return (
    <Section aria-labelledby={'subscribe-heading'} className={styles.section}>
      <h2 className={styles.heading} id={'subscribe-heading'}>
        Subscribe to our newsletters
      </h2>
      <p className={description}>
        Join our mailing list to receive exclusive offers, promotions & product updates!
      </p>
      <form onSubmit={event => event.preventDefault()}>
        <label>
          <input placeholder={'Enter your email address...'} type={'email'} />
        </label>
        <button type={'submit'}>Subscribe</button>
      </form>
    </Section>
  )
}

export const Subscribe = React.memo(_Subscribe)
