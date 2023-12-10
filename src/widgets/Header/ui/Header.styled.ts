import { styled } from 'styled-components'

const Header = styled.header(props => ({
  position: 'fixed',
  bottom: 0,
  width: props.theme.spacing.full,
  height: '48px',
  padding: props.theme.spacing.xs,
  zIndex: 100,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: props.theme.spacing.md,
  transition: 'background-color 0.1s ease-in-out',
  color: props.theme.colors.headerContent,
}))

export { Header }
