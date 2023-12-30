import React from 'react'

import arrowIconId from '@/assets/images/svg/arrow_alternative.svg'
import { PostCard } from '@/entities/Post'
import { POSTS } from '@/entities/Post/mocks/posts'
import { Icon } from '@/shared/components/Icon'

import * as styles from './Blog.css'

const _Blog = () => {
  return (
    <section aria-labelledby={'blog-heading'} className={styles.section}>
      <div className={styles.container}>
        <header aria-labelledby={'blog-heading'} className={styles.header}>
          <h2 className={styles.heading} id={'blog-heading'}>
            Blog
          </h2>
          <a className={styles.link} href={'#'}>
            view all <Icon className={styles.linkIcon} id={arrowIconId} />
          </a>
        </header>
        <ul className={styles.grid} role={'list'}>
          {POSTS.map(post => (
            <li className={styles.gridItem} key={post.id}>
              <PostCard {...post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const Blog = React.memo(_Blog)
