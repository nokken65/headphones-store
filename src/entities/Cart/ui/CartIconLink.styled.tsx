import { Badge } from '@/shared/components/Badge'
import { styled } from 'styled-components'

import { count } from '../model'

const Link = styled.a`
  position: relative;
`

const Count = styled(Badge)`
  position: absolute;
  top: -30%;
  //FIXME: just for fun
  right: -${count.$value.get() >= 100 ? 60 : 40}%;
`

export { Count, Link }
