import { globalStyle, style } from '@vanilla-extract/css'

const trigger = style({
  color: 'inherit',
})

globalStyle(`${trigger} > svg`, {
  width: '1rem',
  height: '1rem',
})

export { trigger }
