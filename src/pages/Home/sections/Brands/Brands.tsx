import React from 'react'

import { BrandCard } from '@/entities/Brand'
import { BRANDS } from '@/entities/Brand/mocks/brands'
import { colorSchemeModel } from '@/entities/ColorScheme'
import { Marquee } from '@/shared/components/Marquee'
import { getColorScheme } from '@/shared/utils/getColorScheme'
import { useStore } from '@nanostores/react'

import * as styles from './Brands.css'

const _Brands = () => {
  const colorScheme = useStore(colorSchemeModel.$currentColorScheme)

  return (
    <section aria-labelledby={'brands-heading'} className={styles.section}>
      <h2 className={styles.heading} id={'brands-heading'}>
        Brands
      </h2>
      <Marquee
        items={BRANDS.map(item => (
          <li key={item.id}>
            <BrandCard {...item} isDarkMode={getColorScheme(colorScheme) === 'dark'} />
          </li>
        ))}
      />
    </section>
  )
}

export const Brands = React.memo(_Brands)
