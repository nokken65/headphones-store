import { style } from '@vanilla-extract/css'

const listItem = style({
  selectors: {
    '&:not(:last-of-type)': {
      marginBottom: '1rem',
    },
  },
})

const listIcons = style({
  display: 'flex',
  gap: '1rem',
})

export { listIcons, listItem }
