import { light } from '@/shared/theme'
import { styled } from 'styled-components'

const Button = styled.button(props => ({
  alignItems: 'center',
  background: 'unset',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: 'bold',
  justifyContent: 'center',
  outline: 'unset',
  padding: props.theme.spacing.md,
}))

const a = light.spacing.md

export { Button }
