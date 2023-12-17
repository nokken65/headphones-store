import profileIconId from '@/assets/images/svg/profile.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './ProfileIconLink.styled'

const ProfileIconLink = () => {
  return (
    <S.Link href={'#'}>
      <Icon height={18} id={profileIconId} width={18} />
    </S.Link>
  )
}

export { ProfileIconLink }
