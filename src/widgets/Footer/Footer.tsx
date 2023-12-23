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

type TNavigationSectionItem = { href: string; content: string }

type TNavigationSection<Item = TNavigationSectionItem> = {
  heading?: string
  items: Item[]
}

const ACCOUNT_LIST: TNavigationSection = {
  heading: 'Account',
  items: [
    { content: 'Wishlist', href: '#' },
    { content: 'Cart', href: '#' },
    { content: 'Track order', href: '#' },
    { content: 'Shipping details', href: '#' },
  ],
}

const LINKS_LIST: TNavigationSection = {
  heading: 'Links',
  items: [
    { content: 'About us', href: '#' },
    { content: 'Contacts', href: '#' },
    { content: 'Hot deals', href: '#' },
    { content: 'Promotions', href: '#' },
    { content: 'New products', href: '#' },
  ],
}
const HELP_LIST: TNavigationSection = {
  heading: 'Help',
  items: [
    { content: 'Payments', href: '#' },
    { content: 'Refund', href: '#' },
    { content: 'Checkout', href: '#' },
    { content: 'Shipping', href: '#' },
    { content: 'Q&A', href: '#' },
    { content: 'Privacy Policy', href: '#' },
  ],
}

const CONTACTS_LIST: TNavigationSection<
  { href: string; content: string } | { href: string; content: string }[]
> = {
  heading: 'Contacts',
  items: [
    { href: '#', content: '+44 20 7234 3456' },
    { href: '#', content: '+44 20 7234 3456' },
    { href: '#', content: '+44 20 7234 3456' },
    [
      { href: '#', content: telegramIconId },
      { href: '#', content: whatsappIconId },
      { href: '#', content: emailIconId },
    ],
  ],
}

const SOCIALS_LIST: TNavigationSection = {
  items: [
    { href: '#', content: telegramIconId },
    { href: '#', content: youtubeIconId },
    { href: '#', content: facebookIconId },
    { href: '#', content: twitterIconId },
    { href: '#', content: instagramIconId },
  ],
}

const _Footer = () => {
  return (
    <S.Footer>
      <S.NavWrapper>
        <NavigationSection heading={ACCOUNT_LIST.heading} items={ACCOUNT_LIST.items}>
          {item => <a href={item.href}>{item.content}</a>}
        </NavigationSection>
        <NavigationSection heading={LINKS_LIST.heading} items={LINKS_LIST.items}>
          {item => <a href={item.href}>{item.content}</a>}
        </NavigationSection>
        <NavigationSection heading={HELP_LIST.heading} items={HELP_LIST.items}>
          {item => <a href={item.href}>{item.content}</a>}
        </NavigationSection>
        <NavigationSection heading={CONTACTS_LIST.heading} items={CONTACTS_LIST.items}>
          {item =>
            Array.isArray(item) ? (
              <NavigationSection
                css={`
                  & > ul {
                    display: flex;
                    gap: 1rem;
                  }
                `}
                items={item}
              >
                {i => (
                  <a href={i.href}>
                    <Icon height={32} id={i.content} width={32} />
                  </a>
                )}
              </NavigationSection>
            ) : (
              <a href={'tel:#'}>{item.content}</a>
            )
          }
        </NavigationSection>
      </S.NavWrapper>
      <S.SocialsList items={SOCIALS_LIST.items}>
        {item => (
          <a href={(item as TNavigationSectionItem).href}>
            <Icon height={32} id={(item as TNavigationSectionItem).content} width={32} />
          </a>
        )}
      </S.SocialsList>
      <S.Copyright>© 2022, All rights reserved</S.Copyright>
    </S.Footer>
  )
}

export const Footer = React.memo(_Footer)
