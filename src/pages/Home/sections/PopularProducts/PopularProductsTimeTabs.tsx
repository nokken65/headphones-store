import { TIME } from './PopularProducts'
import * as S from './PopularProductsTimeTabs.styled'

type PopularProductsTimeTabsProps = {
  active: number
  onChange: (active: number) => void
}

const PopularProductsTimeTabs = ({ active, onChange }: PopularProductsTimeTabsProps) => {
  return (
    <S.List aria-labelledby={'popular-products-heading'} role={'tablist'}>
      {TIME.map((time, index) => (
        <S.Action
          $isSelected={active === index}
          aria-controls={`popular-products-tabpanel-${index}`}
          aria-selected={active === index}
          id={`${time}-tab`}
          key={index}
          onClick={() => onChange(index)}
          role={'tab'}
          tabIndex={active === index ? 0 : -1}
          type={'button'}
        >
          {time.split('-').join(' ')}
        </S.Action>
      ))}
    </S.List>
  )
}

export { PopularProductsTimeTabs }
