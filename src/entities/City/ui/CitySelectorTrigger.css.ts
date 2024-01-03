import { globalStyle, style } from '@vanilla-extract/css'

const trigger = style({
  color: 'inherit',
})

globalStyle(`${trigger} > svg`, {
  verticalAlign: 'middle',
  marginLeft: '0.2rem',
  width: '0.6rem',
  height: '0.6rem',
  transform: 'rotate(-90deg)',
})

export { trigger }
