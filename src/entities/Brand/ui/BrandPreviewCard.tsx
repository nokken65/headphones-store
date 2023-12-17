import * as S from './BrandPreviewCard.styled'

type BrandPreviewCardProps = {
  src: {
    avif: string
    png: string
    webp: string
  }
}

const BrandPreviewCard = ({ src }: BrandPreviewCardProps) => {
  return (
    <S.Card>
      <picture>
        <source srcSet={`${src.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${src.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${src.png} 1x`} type={'image/png'} />
        <S.Image loading={'lazy'} src={src.png} />
      </picture>
    </S.Card>
  )
}

export { BrandPreviewCard }
