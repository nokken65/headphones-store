import React from 'react'

import { BrandCard } from '@/entities/Brand'
import { BRANDS } from '@/entities/Brand/mocks/brands'
import { containerStyles } from '@/shared/components/Container'
import { Marquee } from '@/shared/components/Marquee'
import { sectionStyles } from '@/shared/components/Section'
import { useColorScheme } from '@/shared/theme/hooks/useColorScheme'
import { getColorScheme } from '@/shared/theme/utils/getColorScheme'
import clsx from 'clsx'

const _Brands = () => {
  const [colorScheme] = useColorScheme()

  return (
    <section aria-labelledby={'brands-heading'} className={sectionStyles.section}>
      <h2 className={clsx(sectionStyles.heading, containerStyles.container)} id={'brands-heading'}>
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
