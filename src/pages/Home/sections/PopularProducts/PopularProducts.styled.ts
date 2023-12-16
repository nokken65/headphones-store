import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)(({ theme }) => ({
  // minHeight: theme.spacing.screenH,
}))

export { Section }
