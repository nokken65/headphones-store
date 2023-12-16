import { styled } from 'styled-components'

const List = styled.ul(() => ({
  overflowX: 'hidden',
  display: 'flex',
  gap: '1.5rem',
  listStyle: 'none',
}))

export { List }
