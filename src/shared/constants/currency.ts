import { CurrencyUnit } from '../types/Price'

const CURRENCY_UNIT_MAP: Record<CurrencyUnit, string> = {
  usd: '$',
  rub: '₽',
} as const

export { CURRENCY_UNIT_MAP }
