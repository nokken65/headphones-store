import { style } from '@vanilla-extract/css'

const navigation = style({})

const navigationDisclosure = style({
  width: '100%',
})

const heading = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  width: '100%',
  selectors: {
    [`${navigation} &`]: {
      marginBottom: '1rem',
    },
  },
})

export { heading, navigation, navigationDisclosure }
