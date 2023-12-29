import { globalStyle, style } from '@vanilla-extract/css'

const triggerClass = style({
  color: 'inherit',
})

globalStyle(`${triggerClass} > svg`, {
  width: '1rem',
  height: '1rem',
})

export { triggerClass }
