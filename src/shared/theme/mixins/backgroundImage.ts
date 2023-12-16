import avif from '@/assets/images/background/background.avif'
import jpg from '@/assets/images/background/background.jpg'
import webp from '@/assets/images/background/background.webp'
import { css } from 'styled-components'

const backgroundImage = css`
  background-color: ${({ theme }) => theme.colors.backgroundImageFallback};
  background-image: url(${jpg});
  background-image: image-set(url(${avif}) 1x, url(${webp}) 1x, url(${jpg}) 1x);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`

export { backgroundImage }
