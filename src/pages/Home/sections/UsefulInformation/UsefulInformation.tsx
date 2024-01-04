import React from 'react'

import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import clsx from 'clsx'

import * as styles from './UsefulInformation.module.css'

const LINKS = [
  'Headphones',
  'Ipods',
  'Microphones',
  'Speaker systems',
  'Vinyl records',
  'True Wireless Headphones',
  'TOP 10 Plug-in Wireless Headphones',
  'Best Wireless Full-size Headphones',
  'Best TWS up to 1,000 $',
]

const _UsefulInformation = () => {
  return (
    <section
      aria-labelledby={'useful-information-heading'}
      className={clsx(sectionStyles.section, styles.section)}
    >
      <div className={clsx(containerStyles.container, styles.container)}>
        <h2
          className={clsx(sectionStyles.heading, styles.heading)}
          id={'useful-information-heading'}
        >
          Useful information
        </h2>
        <nav aria-label={'useful-information-links'} className={styles.navigation}>
          <ul className={styles.list} role={'list'}>
            {LINKS.map((link, index) => (
              <li className={styles.listItem} key={index}>
                <a aria-label={link} className={clsx(linkStyles.link, styles.link)} href={'#'}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere, soluta atque
          doloribus quaerat laudantium aliquam commodi vitae, inventore neque, at molestias
          assumenda! Quis, provident. Perspiciatis voluptate fugit rerum maxime odit ea, earum
          placeat quod maiores rem molestiae distinctio eligendi asperiores perferendis error. Autem
          ex aliquid quos, nulla est debitis nobis quaerat iure, obcaecati doloribus nemo voluptas
          unde explicabo consectetur quae aperiam.
        </p>
      </div>
    </section>
  )
}

export const UsefulInformation = React.memo(_UsefulInformation)
