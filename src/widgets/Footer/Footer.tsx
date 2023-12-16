import React from 'react'

import emailIconId from '@/assets/images/svg/email.svg'
import facebookIconId from '@/assets/images/svg/facebook.svg'
import instagramIconId from '@/assets/images/svg/instagram.svg'
import telegramIconId from '@/assets/images/svg/telegram.svg'
import twitterIconId from '@/assets/images/svg/twitter.svg'
import whatsappIconId from '@/assets/images/svg/whatsapp.svg'
import youtubeIconId from '@/assets/images/svg/youtube.svg'
import { Icon } from '@/shared/components/Icon'

import * as S from './Footer.styled'
import { NavigationSection } from './NavigationSection'

const ACCOUNT_LIST = {
  heading: 'Account',
  items: ['Wishlist', 'Cart', 'Track order', 'Shipping details'],
}

const LINKS_LIST = {
  heading: 'Links',
  items: ['About Us', 'Contacts', 'Hot deals', 'Promotions', 'New products'],
}

const HELP_LIST = {
  heading: 'Help',
  items: ['Payments', 'Refund', 'Checkout', 'Shipping', 'Q&A', 'Privacy Policy'],
}

const CONTACTS_LIST = {
  heading: 'Contacts',
  items: [
    '+44 20 7234 3456',
    '+44 20 7234 3456',
    '+44 20 7234 3456',
    <ul key={'social contacts'} style={{ display: 'flex', gap: '1rem' }}>
      <li>
        <a href={'#'}>
          <Icon height={32} id={telegramIconId} width={32} />
        </a>
      </li>
      <li>
        <a href={'#'}>
          <Icon height={32} id={whatsappIconId} width={32} />
        </a>
      </li>
      <li>
        <a href={'#'}>
          <Icon height={32} id={emailIconId} width={32} />
        </a>
      </li>
    </ul>,
  ],
}

const _Footer = () => {
  return (
    <S.Footer>
      <S.Content>
        <NavigationSection heading={ACCOUNT_LIST.heading} items={ACCOUNT_LIST.items}>
          {item => <a href={'#'}>{item}</a>}
        </NavigationSection>
        <NavigationSection heading={LINKS_LIST.heading} items={LINKS_LIST.items}>
          {item => <a href={'#'}>{item}</a>}
        </NavigationSection>
        <NavigationSection heading={HELP_LIST.heading} items={HELP_LIST.items}>
          {item => <a href={'#'}>{item}</a>}
        </NavigationSection>
        <NavigationSection heading={CONTACTS_LIST.heading} items={CONTACTS_LIST.items}>
          {item => (typeof item === 'string' ? <a href={'tel:#'}>{item}</a> : item)}
        </NavigationSection>
        <S.SocialsList>
          <li>
            <a href={'#'}>
              <Icon height={32} id={telegramIconId} width={32} />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <Icon height={32} id={youtubeIconId} width={32} />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <Icon height={32} id={facebookIconId} width={32} />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <Icon height={32} id={twitterIconId} width={32} />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <Icon height={32} id={instagramIconId} width={32} />
            </a>
          </li>
        </S.SocialsList>
      </S.Content>
      <S.Copyright>© 2022, All rights reserved</S.Copyright>
    </S.Footer>
  )
}

export const Footer = React.memo(_Footer)
