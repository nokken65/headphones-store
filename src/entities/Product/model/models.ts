import type { ImageLinks } from '@/shared/types'
import type { CurrencyUnit } from '@/shared/types/Price'

type Price = {
  currentvalue: number
  regularValue: number
  saleValue?: number
  isSale: boolean
  unit: CurrencyUnit
}

type Product = {
  name: string
  category: string
  price: Price
  rating: number
  image: ImageLinks
}

export type { Price, Product }
