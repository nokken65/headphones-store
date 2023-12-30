import type { Brand } from '../model/models'

import clsx from 'clsx'

import * as styles from './BrandCard.css'

// FIXME: isDarkMode flag
type BrandProps = Brand & { isDarkMode: boolean }

const BrandCard = ({ label, src, isDarkMode }: BrandProps) => {
  return (
    <article aria-label={label} className={styles.card}>
      <picture>
        <source srcSet={`${src.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${src.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${src.original} 1x`} type={'image/png'} />
        <img
          alt={`${label} logo image`}
          className={clsx(styles.image, isDarkMode ? styles.imageDark : styles.imageLight)}
          height={32}
          loading={'lazy'}
          src={src.original}
          width={220}
        />
      </picture>
    </article>
  )
}

export { BrandCard }
