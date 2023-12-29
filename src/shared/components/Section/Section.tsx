import React from 'react'

import { clsx } from 'clsx'

import * as styles from './Section.css'

const Section = ({ children, className, ...props }: React.ComponentPropsWithoutRef<'section'>) => (
  <section {...props} className={clsx(styles.section, className)}>
    {children}
  </section>
)

export { Section }
