import React from 'react'

import { Disclosure } from '@/shared/components/Disclosure'

import * as S from './Subscribe.styled'

const _Subscribe = () => {
  return (
    <S.Section aria-labelledby={'subscribe-heading'}>
      <h2 id={'subscribe-heading'}>Subscribe to our newsletters</h2>
      <S.Description>
        Join our mailing list to receive exclusive offers, promotions & product updates!
      </S.Description>
      <form onSubmit={event => event.preventDefault()}>
        <label>
          <input placeholder={'Enter your email address...'} type={'email'} />
        </label>
        <button type={'submit'}>Subscribe</button>
      </form>

      <Disclosure label={'Accordion first'}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, magni.
      </Disclosure>
      <Disclosure label={'second'}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, magni.
      </Disclosure>
    </S.Section>
  )
}

export const Subscribe = React.memo(_Subscribe)
