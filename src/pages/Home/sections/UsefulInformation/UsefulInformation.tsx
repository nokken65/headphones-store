import React from 'react'

import * as S from './UsefulInformation.styled'

const _UsefulInformation = () => {
  return (
    <S.Section aria-labelledby={'useful-information-heading'}>
      <h2 id={'useful-information-heading'}>Useful information</h2>
      <nav aria-label={'useful-information-links'}>
        <S.List>
          <li>
            <S.Link href={'#'}>Headphones</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Ipods</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Microphones</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Speaker systems</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Vinyl records</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>True Wireless Headphones</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>TOP 10 Plug-in Wireless Headphones</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Best Wireless Full-size Headphones</S.Link>
          </li>
          <li>
            <S.Link href={'#'}>Best TWS up to 1,000 $</S.Link>
          </li>
        </S.List>
      </nav>
      <S.Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere, soluta atque doloribus
        quaerat laudantium aliquam commodi vitae, inventore neque, at molestias assumenda! Quis,
        provident. Perspiciatis voluptate fugit rerum maxime odit ea, earum placeat quod maiores rem
        molestiae distinctio eligendi asperiores perferendis error. Autem ex aliquid quos, nulla est
        debitis nobis quaerat iure, obcaecati doloribus nemo voluptas unde explicabo consectetur
        quae aperiam.
      </S.Description>
    </S.Section>
  )
}

export const UsefulInformation = React.memo(_UsefulInformation)
