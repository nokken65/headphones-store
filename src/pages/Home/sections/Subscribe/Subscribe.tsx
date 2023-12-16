import React from 'react'

import * as S from './Subscribe.styled'

const _Subscribe = () => {
  return (
    <S.Section>
      <S.Section.Heading title={'Subscribe to our newsletters'} />
      <S.Description>
        Join our mailing list to receive exclusive offers, promotions & product updates!
      </S.Description>
      <form onSubmit={event => event.preventDefault()}>
        <label>
          <input placeholder={'Enter your email address...'} type={'email'} />
        </label>
        <button type={'submit'}>Subscribe</button>
      </form>
    </S.Section>
  )
}

export const Subscribe = React.memo(_Subscribe)
