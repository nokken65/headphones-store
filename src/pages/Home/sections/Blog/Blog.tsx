import React from 'react'

import arrowIconId from '@/assets/images/svg/arrow_alternative.svg'
import { PostCard } from '@/entities/Post'
import { POSTS } from '@/entities/Post/mocks/posts'
import { containerStyles } from '@/shared/components/Container'
import { Icon } from '@/shared/components/Icon'
import { linkStyles } from '@/shared/components/Link'
import { sectionStyles } from '@/shared/components/Section'
import clsx from 'clsx'

import styles from './Blog.module.css'

const _Blog = () => {
  return (
    <section aria-labelledby={'blog-heading'} className={sectionStyles.section}>
      <div className={containerStyles.container}>
        <header aria-labelledby={'blog-heading'} className={styles.header}>
          <h2 className={clsx(sectionStyles.heading, styles.heading)} id={'blog-heading'}>
            Blog
          </h2>
          <a className={clsx(linkStyles.link, styles.link)} href={'#'}>
            view all <Icon className={styles.linkIcon} id={arrowIconId} />
          </a>
        </header>
        <ul className={styles.grid} role={'list'}>
          {POSTS.map(post => (
            <li key={post.id}>
              <PostCard {...post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const Blog = React.memo(_Blog)
