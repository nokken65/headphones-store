import { Section as BaseSection } from '@/shared/components/Section'
import { styled } from 'styled-components'

const Section = styled(BaseSection)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'unset',
  minHeight: theme.spacing.screenH,
  gap: '100px',
  flexDirection: 'row',
  padding: '0 3.75rem',
  alignItems: 'center',
}))

export { Section }
