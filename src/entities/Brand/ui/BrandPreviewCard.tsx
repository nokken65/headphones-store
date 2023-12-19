import * as S from './BrandPreviewCard.styled'

type BrandPreviewCardProps = {
  name: string
  src: {
    avif: string
    png: string
    webp: string
  }
}

const BrandPreviewCard = ({ name, src }: BrandPreviewCardProps) => {
  return (
    <S.Card aria-label={name} title={name}>
      <picture>
        <source srcSet={`${src.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${src.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${src.png} 1x`} type={'image/png'} />
        <S.Image alt={`${name} logo image`} loading={'lazy'} src={src.png} />
      </picture>
    </S.Card>
  )
}

export { BrandPreviewCard }
