import { styled } from 'styled-components'

type ContainerProps = {
  $fluid?: boolean
}

const Container = styled.div<ContainerProps>(({ theme, $fluid = false }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing['2xl'],
  width: $fluid ? theme.spacing.full : 'fit-content',
  height: 'fit-content',
}))

export { Container }
