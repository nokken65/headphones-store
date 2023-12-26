import { Section as BaseSection } from '@/shared/components/Section'
import { container } from '@/shared/theme/mixins/container'
import { styled } from 'styled-components'

const Section = styled(BaseSection)`
  ${container({ padding: '0 3rem 0 0' })}
`

export { Section }
