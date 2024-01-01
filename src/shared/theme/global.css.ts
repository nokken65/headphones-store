import avif from '@/assets/images/background/background.avif'
import jpg from '@/assets/images/background/background.jpg'
import webp from '@/assets/images/background/background.webp'
import { globalStyle } from '@vanilla-extract/css'

import { vars } from './contract.css'

globalStyle('body', {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  fontFamily: vars.fontFamily,
  fontSize: vars.fontSize,
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',

  overflowX: 'hidden',
  vars: {
    '--scrollbar-width': 'calc(100vw - 100%)',
  },
})

globalStyle('#app-root', {
  minHeight: '100dvh',
  backgroundColor: vars.colors.backgroundImageFallback,
  backgroundImage: `image-set(url(${avif}) 1x type("image/avif"),
                    url(${webp}) 1x type("image/webp"),
                    url(${jpg}) 1x type("image/jpeg"))`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})
