import type { Post } from '../model/models'

import eyeIconId from '@/assets/images/svg/eye.svg'
import { Icon } from '@/shared/components/Icon'
import { ProgressiveImage } from '@/shared/components/ProgressiveImage'
import { formatDate } from '@/shared/utils/formatDate'

import * as styles from './PostCard.css'

type PostCardProps = Post

const PostCard = ({ id, title, date, views, cover, tags }: PostCardProps) => {
  return (
    <article aria-labelledby={`post-heading-${id}`} className={styles.card}>
      <ProgressiveImage
        alt={`${title} post image cover`}
        className={styles.cover}
        loading={'lazy'}
        sources={{
          avif: { srcSet: { '1x': cover.avif } },
          webp: { srcSet: { '1x': cover.webp } },
          png: { srcSet: { '1x': cover.original } },
          fallback: cover.original,
        }}
      />
      {/* FIXME: a11y */}
      <ul className={styles.tagList} role={'list'}>
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
