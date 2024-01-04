import React from 'react'

import emailIconId from '@/assets/images/svg/email.svg'
import facebookIconId from '@/assets/images/svg/facebook.svg'
import instagramIconId from '@/assets/images/svg/instagram.svg'
import telegramIconId from '@/assets/images/svg/telegram.svg'
import twitterIconId from '@/assets/images/svg/twitter.svg'
import whatsappIconId from '@/assets/images/svg/whatsapp.svg'
import youtubeIconId from '@/assets/images/svg/youtube.svg'
import { containerStyles } from '@/shared/components/Container'
import clsx from 'clsx'

import styles from './Footer.module.css'

import { LinksListIcon } from './LinksList'
import { NavigationSection } from './NavigationSection'
import { LinkIcon, LinkText } from './model/models'

type TNavigationSection<Item = LinkText> = {
  heading: string
  items: Item[]
}

const ACCOUNT_LIST: TNavigationSection = {
  heading: 'Account',
  items: [
    { text: 'Wishlist', href: '#' },
    { text: 'Cart', href: '#' },
    { text: 'Track order', href: '#' },
    { text: 'Shipping details', href: '#' },
  ],
}

const LINKS_LIST: TNavigationSection = {
  heading: 'Links',
  items: [
    { text: 'About us', href: '#' },
    { text: 'Contacts', href: '#' },
    { text: 'Hot deals', href: '#' },
    { text: 'Promotions', href: '#' },
    { text: 'New products', href: '#' },
  ],
}
const HELP_LIST: TNavigationSection = {
  heading: 'Help',
  items: [
    { text: 'Payments', href: '#' },
    { text: 'Refund', href: '#' },
    { text: 'Checkout', href: '#' },
    { text: 'Shipping', href: '#' },
    { text: 'Q&A', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
}

const CONTACTS_LIST: TNavigationSection<LinkIcon[] | LinkText> = {
  heading: 'Contacts',
  items: [
    { href: '#', text: '+44 20 7234 3456' },
    { href: '#', text: '+44 20 7234 3456' },
    { href: '#', text: '+44 20 7234 3456' },
    [
      { href: '#', label: 'telegram', id: telegramIconId },
      { href: '#', label: 'whatsapp', id: whatsappIconId },
      { href: '#', label: 'email', id: emailIconId },
    ],
  ],
}

const SOCIALS_LIST: Omit<TNavigationSection<LinkIcon>, 'heading'> = {
  items: [
    { href: '#', label: 'telegram', id: telegramIconId },
    { href: '#', label: 'youtube', id: youtubeIconId },
    { href: '#', label: 'facebook', id: facebookIconId },
    { href: '#', label: 'twitter', id: twitterIconId },
    { href: '#', label: 'instagram', id: instagramIconId },
  ],
}

const _Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(containerStyles.container, styles.navigations)}>
        <NavigationSection heading={ACCOUNT_LIST.heading} items={ACCOUNT_LIST.items} />{' '}
        <NavigationSection heading={LINKS_LIST.heading} items={LINKS_LIST.items} />
        <NavigationSection heading={HELP_LIST.heading} items={HELP_LIST.items} />
        <NavigationSection heading={CONTACTS_LIST.heading} items={CONTACTS_LIST.items} />
      </div>
      <nav aria-label={'socials'} className={styles.socialsNav}>
        <LinksListIcon className={styles.socialsList} items={SOCIALS_LIST.items} />
      </nav>
      <small className={styles.copyright}>© 2022, All rights reserved</small>
    </footer>
  )
}

export const Footer = React.memo(_Footer)
