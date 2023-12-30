import type { Brand } from '../model/models'

import beatsaudioLightAvifSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.avif'
import beatsaudioLightPngSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.png'
import beatsaudioLightWebpSrc from '@/assets/images/brands/beatsaudio/beatsaudio_light@1x.webp'

const BRANDS: Brand[] = [...Array(10)].map((_, index) => ({
  id: 'id-' + index,
  label: 'beatsaudio',
  src: {
    original: beatsaudioLightPngSrc,
    avif: beatsaudioLightAvifSrc,
    webp: beatsaudioLightWebpSrc,
  },
}))

export { BRANDS }
