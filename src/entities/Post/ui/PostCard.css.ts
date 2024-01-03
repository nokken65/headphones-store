import { cardStyles } from '@/shared/components/Card'
import { linkStyles } from '@/shared/components/Link'
import { vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const card = style([
  cardStyles.card,
  {
    borderRadius: 'unset',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'space-between',
    position: 'relative',

    transition: 'outline-color 0.2s ease-in-out',
    outline: '5px solid transparent',
    outlineOffset: '0.2rem',

    selectors: {
      '&:focus-within, &:has(a:hover)': {
        outlineColor: vars.colors.text,
      },
    },
  },
])

const link = style([
  linkStyles.link,
  {
    width: '100%',
    height: '100%',
    position: 'unset',

    ':after': {
      display: 'none',
    },
    ':before': {
      width: 'unset',
      height: 'unset',
      inset: 0,
      zIndex: 1,

      backgroundColor: 'transparent',
    },
  },
])

const cover = style({
  maxInlineSize: 'unset',
  maxBlockSize: 'unset',
  objectFit: 'cover',
  width: '100%',
  aspectRatio: '1 / 1',
})

const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  padding: '0 1rem',
})

const tag = style({
  fontSize: '0.8rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '0.5rem',
  background: vars.colors.text,
  color: vars.colors.textInvert,
})

const title = style({
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 1.2,
  padding: '0 1rem',
})

const footer = style({
  marginTop: 'auto',
  opacity: 0.7,
  padding: '0 1rem 1rem',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
})

const viewsIcon = style({
  height: '0.8rem',
  width: '1rem',
  marginRight: '0.2rem',
})

export { card, cover, footer, link, tag, tagList, title, viewsIcon }
