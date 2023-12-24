import { styled } from 'styled-components'

const List = styled.ul`
  & li:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

const ListIcon = styled.ul`
  display: flex;
  gap: 1rem;
`

export { List, ListIcon }
