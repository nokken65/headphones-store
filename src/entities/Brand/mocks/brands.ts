import type { Brand } from '../model/models'

import beatsaudioAvifSrc from '@/assets/images/brands/beatsaudio/beatsaudio_@1x.avif'
import beatsaudioPngSrc from '@/assets/images/brands/beatsaudio/beatsaudio_@1x.png'
import beatsaudioWebpSrc from '@/assets/images/brands/beatsaudio/beatsaudio_@1x.webp'

const BRANDS: Brand[] = [...Array(10)].map((_, index) => ({
  id: 'id-' + index,
  label: 'beatsaudio',
  src: {
    original: beatsaudioPngSrc,
    avif: beatsaudioAvifSrc,
    webp: beatsaudioWebpSrc,
  },
}))

export { BRANDS }
