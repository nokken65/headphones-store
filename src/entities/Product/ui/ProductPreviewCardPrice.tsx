import { CURRENCY_UNIT_MAP } from '@/shared/constants'

import { Price } from '../model/models'
import * as S from './ProductPreviewCardPrice.styled'

type ProductPreviewCardPriceProps = Price

const ProductPreviewCardPrice = ({
  currentvalue,
  regularValue,
  saleValue,
  isSale,
  unit,
}: ProductPreviewCardPriceProps) => {
  const currentPrice = `${CURRENCY_UNIT_MAP[unit]} ${currentvalue}`

  if (isSale && saleValue) {
    const sale = `-${regularValue - saleValue}%`
    const regularPrice = `${CURRENCY_UNIT_MAP[unit]} ${regularValue}`

    return (
      <>
        <S.Price>{currentPrice}</S.Price>
        <S.RegularPriceWrapper>
          <S.RegularPrice>{regularPrice}</S.RegularPrice>
          <S.Sale>{sale}</S.Sale>
        </S.RegularPriceWrapper>
      </>
    )
  } else {
    return (
      <S.Price
        css={`
          grid-row: 4 / 6;
          align-self: center;
        `}
      >
        {currentPrice}
      </S.Price>
    )
  }
}

export { ProductPreviewCardPrice }
