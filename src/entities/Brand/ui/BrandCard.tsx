import type { Brand } from '../model/models'

import { cardStyles } from '@/shared/components/Card'
import { ProgressiveImage } from '@/shared/components/ProgressiveImage'
import clsx from 'clsx'

import styles from './BrandCard.module.css'

// FIXME: isDarkMode flag
type BrandProps = Brand & { isDarkMode: boolean }

const BrandCard = ({ label, src, isDarkMode }: BrandProps) => {
  return (
    <article aria-label={label} className={clsx(cardStyles.card, styles.card)}>
      <ProgressiveImage
        alt={`${label} logo image`}
        className={clsx(styles.image)}
        data-is-inverted={isDarkMode}
        height={32}
        loading={'lazy'}
        sources={{
          avif: { srcSet: { '1x': src.avif } },
          webp: { srcSet: { '1x': src.webp } },
          png: { srcSet: { '1x': src.original } },
          fallback: src.original,
        }}
        src={src.original}
        width={220}
      />
    </article>
  )
}

export { BrandCard }
