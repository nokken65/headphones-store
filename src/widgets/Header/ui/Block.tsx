import React from 'react'

import * as S from './Block.styled'

type BlockProps = React.PropsWithChildren

const _Block = ({ children }: BlockProps) => {
  return <S.Block>{children}</S.Block>
}

export const Block = React.memo(_Block)
