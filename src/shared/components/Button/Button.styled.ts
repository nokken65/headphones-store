import { light } from '@/shared/theme'
import { styled } from 'styled-components'

const Button = styled.button(props => ({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'bold',
  justifyContent: 'center',
  outline: 'unset',
  // padding: props.theme.spacing.md,

  ':hover': {
    backgroundColor: props.theme.colors.accent,
  },

  '& svg': {
    width: '100%',
    height: '100%',
    padding: props.theme.spacing.md,
  },
}))

export { Button }
