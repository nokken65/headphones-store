import type { Post } from '../model/models'

import eyeIconId from '@/assets/images/svg/eye.svg'
import { Icon } from '@/shared/components/Icon'
import { formatDate } from '@/shared/utils/formatDate'

import * as styles from './PostCard.css'

type PostCardProps = Post

const PostCard = ({ id, title, date, views, cover, tags }: PostCardProps) => {
  return (
    <article aria-labelledby={`post-heading-${id}`} className={styles.card}>
      <picture>
        <source srcSet={`${cover.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${cover.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${cover.original} 1x`} type={'image/png'} />
        <img
          alt={`${title} post image cover`}
          className={styles.cover}
          loading={'lazy'}
          src={cover.original}
        />
      </picture>
      {/* FIXME: a11y */}
      <ul className={styles.tagList}>
        {tags.map(tag => (
          <li className={styles.tag} key={tag.label}>
            {tag.label}
          </li>
        ))}
      </ul>
      <h3 className={styles.title} id={`post-heading-${id}`}>
        <a aria-labelledby={`post-heading-${id}`} className={styles.link} href={'#' + id}>
          {title}
        </a>
      </h3>
      <footer className={styles.footer}>
        <time dateTime={formatDate(date, { separator: '-' })}>
          {formatDate(date, { separator: '.' })}
        </time>
        <span>
          <Icon className={styles.viewsIcon} id={eyeIconId} />
          {views}
        </span>
      </footer>
    </article>
  )
}

export { PostCard }
