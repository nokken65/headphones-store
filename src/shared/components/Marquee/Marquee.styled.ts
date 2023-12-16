import { styled } from 'styled-components'

const List = styled.ul(() => ({
  overflow: 'clip',
  overflowClipMargin: '3rem',
  display: 'flex',
  gap: '1.5rem',
}))

export { List }
