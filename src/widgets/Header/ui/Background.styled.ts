import { styled } from 'styled-components'

const Background = styled.div(props => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: props.theme.spacing.full,
  height: props.theme.spacing.full,
  zIndex: -1,
  backgroundColor: props.theme.colors.accent,
  transform: 'var(--transform)',
  transition: 'transform 0.2s ease-in-out',
}))

export { Background }
