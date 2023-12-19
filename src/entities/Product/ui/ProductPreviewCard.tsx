import type { Product } from '../model/models'

import cartIconId from '@/assets/images/svg/cart.svg'
import starIconId from '@/assets/images/svg/star.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './ProductPreviewCard.styled'
import { ProductPreviewCardPrice } from './ProductPreviewCardPrice'

type ProductPreviewCardProps = Product

const ProductPreviewCard = ({ name, category, rating, price, image }: ProductPreviewCardProps) => {
  return (
    <S.Card>
      <S.Image>
        <source srcSet={`${image.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${image.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${image.original} 1x`} type={'image/png'} />
        <img alt={`${name} image`} loading={'lazy'} src={image.original} />
      </S.Image>
      <S.Category>{category}</S.Category>
      <S.Name>{name}</S.Name>
      <S.Rating>
        <Icon height={16} id={starIconId} width={16} />
        {rating}
      </S.Rating>
      <ProductPreviewCardPrice {...price} />
      <S.AddToCart>
        add to cart
        <Icon height={16} id={cartIconId} width={16} />
      </S.AddToCart>
    </S.Card>
  )
}

export { ProductPreviewCard }
