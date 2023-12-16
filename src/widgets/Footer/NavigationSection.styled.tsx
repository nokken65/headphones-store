import { styled } from 'styled-components'

const Heading = styled.h3(() => ({
  fontSize: '1.25rem',
  fontWeight: 700,
}))

const List = styled.ul(() => ({
  listStyle: 'none',
  '& li': {
    marginTop: '1rem',
  },
}))

export { Heading, List }
