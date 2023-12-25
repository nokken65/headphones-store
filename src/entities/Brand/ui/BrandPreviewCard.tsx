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
    <S.Card aria-label={name}>
      <picture>
        <source srcSet={`${src.avif} 1x`} type={'image/avif'} />
        <source srcSet={`${src.webp} 1x`} type={'image/webp'} />
        <source srcSet={`${src.png} 1x`} type={'image/png'} />
        <S.Image
          alt={`${name} logo image`}
          height={37}
          loading={'lazy'}
          src={src.png}
          width={250}
        />
      </picture>
    </S.Card>
  )
}

export { BrandPreviewCard }
