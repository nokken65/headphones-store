import { styled } from 'styled-components'

const Block = styled.div(props => ({
  '& svg': {
    color: 'var(--header-icon-color)',
  },
  alignItems: 'center',
  backgroundColor: 'var(--header-block-background-color)',
  borderRadius: props.theme.radius.md,
  boxShadow: 'var(--header-block-shadow)',
  color: props.theme.colors.text,
  display: 'flex',
  fontWeight: 'bold',
  gap: 0,
  justifyContent: 'center',
}))

export { Block }
