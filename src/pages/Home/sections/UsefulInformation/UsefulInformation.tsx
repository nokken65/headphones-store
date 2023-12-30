import React from 'react'

import * as styles from './UsefulInformation.css'

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
    <section aria-labelledby={'useful-information-heading'} className={styles.section}>
      <h2 className={styles.heading} id={'useful-information-heading'}>
        Useful information
      </h2>
      <nav aria-label={'useful-information-links'}>
        <ul className={styles.list} role={'list'}>
          {LINKS.map((link, index) => (
            <li className={styles.listItem} key={index}>
              <a className={styles.link}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere, soluta atque doloribus
        quaerat laudantium aliquam commodi vitae, inventore neque, at molestias assumenda! Quis,
        provident. Perspiciatis voluptate fugit rerum maxime odit ea, earum placeat quod maiores rem
        molestiae distinctio eligendi asperiores perferendis error. Autem ex aliquid quos, nulla est
        debitis nobis quaerat iure, obcaecati doloribus nemo voluptas unde explicabo consectetur
        quae aperiam.
      </p>
    </section>
  )
}

export const UsefulInformation = React.memo(_UsefulInformation)
