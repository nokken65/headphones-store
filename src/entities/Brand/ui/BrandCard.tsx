import type { Brand } from '../model/models'

import { ProgressiveImage } from '@/shared/components/ProgressiveImage'
import clsx from 'clsx'

import * as styles from './BrandCard.css'

// FIXME: isDarkMode flag
type BrandProps = Brand & { isDarkMode: boolean }

const BrandCard = ({ label, src, isDarkMode }: BrandProps) => {
  return (
    <article aria-label={label} className={styles.card}>
      <ProgressiveImage
        alt={`${label} logo image`}
        className={clsx(styles.image, isDarkMode ? styles.imageDark : styles.imageLight)}
        height={32}
        loading={'lazy'}
        sources={{
          fallback: src.original,
          avif: { srcSet: { '1x': src.avif } },
          webp: { srcSet: { '1x': src.webp } },
          png: { srcSet: { '1x': src.original } },
        }}
        src={src.original}
        width={220}
      />
    </article>
  )
}

export { BrandCard }
