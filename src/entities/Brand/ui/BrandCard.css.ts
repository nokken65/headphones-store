import { cardStyles } from '@/shared/components/Card'
import { style } from '@vanilla-extract/css'

const card = style([
  cardStyles.card,
  {
    width: '14.75rem',
    minWidth: '14.75rem',
    padding: '2rem 1.5rem',
  },
])

const image = style({
  width: '100%',
  height: '100%',
})

const imageLight = style({
  filter: 'grayscale(1)',
})

const imageDark = style({
  filter: 'grayscale(1) invert(1)',
})

export { card, image, imageDark, imageLight }