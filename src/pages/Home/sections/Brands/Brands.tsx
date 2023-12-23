import React from 'react'

import beatsaudioDarkAvifSrc from '@/assets/images/brands/beatsaudio/beatsaudio_dark@1x.avif'
import beatsaudioDarkPngSrc from '@/assets/images/brands/beatsaudio/beatsaudio_dark@1x.png'
import beatsaudioDarkWebpSrc from '@/assets/images/brands/beatsaudio/beatsaudio_dark@1x.webp'
import beatsaudioLightAvifSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.avif'
import beatsaudioLightPngSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.png'
import beatsaudioLightWebpSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.webp'
import { BrandPreviewCard } from '@/entities/Brand'
import { colorSchemeModel } from '@/entities/ColorScheme'
import { Marquee } from '@/shared/components/Marquee'
import { getColorScheme } from '@/shared/utils/getColorScheme'
import { useStore } from '@nanostores/react'

import * as S from './Brands.styled'

const BEATSAUDIO_SRC = {
  light: { png: beatsaudioLightPngSrc, webp: beatsaudioLightWebpSrc, avif: beatsaudioLightAvifSrc },
  dark: { png: beatsaudioDarkPngSrc, webp: beatsaudioDarkWebpSrc, avif: beatsaudioDarkAvifSrc },
}

const _Subscribe = () => {
  const theme = useStore(colorSchemeModel.$currentColorScheme)

  return (
    <S.Section aria-labelledby={'brands-heading'}>
      <h2 id={'brands-heading'}>Brands</h2>
      <Marquee
        items={[...Array(10).fill(BEATSAUDIO_SRC[getColorScheme(theme)])].map((src, index) => (
          <li key={index}>
            <BrandPreviewCard name={'beatsaudio'} src={src} />
          </li>
        ))}
      />
    </S.Section>
  )
}

export const Brands = React.memo(_Subscribe)
