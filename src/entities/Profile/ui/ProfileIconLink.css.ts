import { linkStyles } from '@/shared/components/Link'
import { style } from '@vanilla-extract/css'

const link = style([
  linkStyles.link,
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3.5rem',
    height: '3.5rem',
  },
])

export { link }
