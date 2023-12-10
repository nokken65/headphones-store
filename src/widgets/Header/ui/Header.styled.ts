import { styled } from 'styled-components'

const Header = styled.header(props => ({
  bottom: 0,
  height: '62px',
  position: 'fixed',
  width: props.theme.spacing.full,
  zIndex: 100,
}))

const Container = styled.div(props => ({
  display: 'flex',
  gap: props.theme.spacing.md,
  height: props.theme.spacing.full,
  justifyContent: 'space-between',
  padding: props.theme.spacing.xs,
  position: 'absolute',
  width: props.theme.spacing.full,
}))

export { Container, Header }
