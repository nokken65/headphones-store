import { cardStyles } from '@/shared/components/Card'
import { containerStyles } from '@/shared/components/Container'
import { linkStyles } from '@/shared/components/Link'
import { vars } from '@/shared/theme'
import { style } from '@vanilla-extract/css'

const card = style([
  cardStyles.card,
  {
    padding: '1rem',
    borderRadius: 'unset',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    position: 'relative',

    justifyContent: 'space-between',

    // width: '100%',
    // height: '100%',

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

//   & > h3 {
//     text-decoration: underline;
//   }
// }

const link = style([
  linkStyles.link,
  {
    width: '100%',
    height: '100%',

    ':before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,

      backgroundColor: 'transparent',
    },
  },
])

const cover = style({
  maxInlineSize: 'unset',
  maxBlockSize: 'unset',
  objectFit: 'cover',
  width: 'calc(100% + 2rem)',
  margin: '-1rem -1rem 0',
  aspectRatio: '1 / 1',
})

const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
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
})

const footer = style({
  marginTop: 'auto',
  opacity: 0.5,

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
