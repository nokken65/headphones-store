import React from 'react'

import emailIconId from '@/assets/images/svg/email.svg'
import facebookIconId from '@/assets/images/svg/facebook.svg'
import instagramIconId from '@/assets/images/svg/instagram.svg'
import telegramIconId from '@/assets/images/svg/telegram.svg'
import twitterIconId from '@/assets/images/svg/twitter.svg'
import whatsappIconId from '@/assets/images/svg/whatsapp.svg'
import youtubeIconId from '@/assets/images/svg/youtube.svg'
import { containerStyles } from '@/shared/components/Container'
import { routes } from '@/shared/config/routes'
import clsx from 'clsx'

import styles from './Footer.module.css'

import { NavigationSection } from './NavigationSection'
import { NavLink } from './model/models'

type TNavigationSection<Item = NavLink> = {
  heading: string
  items: Item[]
}

const ACCOUNT_LIST: TNavigationSection = {
  heading: 'Account',
  items: [
    { label: 'Wishlist', to: routes.index.route },
    { label: 'Cart', to: routes.index.route },
    { label: 'Track order', to: routes.index.route },
    { label: 'Shipping details', to: routes.index.route },
  ],
}

const LINKS_LIST: TNavigationSection = {
  heading: 'Links',
  items: [
    { label: 'About us', to: routes.index.route },
    { label: 'Contacts', to: routes.index.route },
    { label: 'Hot deals', to: routes.index.route },
    { label: 'Promotions', to: routes.index.route },
    { label: 'New products', to: routes.index.route },
  ],
}
const HELP_LIST: TNavigationSection = {
  heading: 'Help',
  items: [
    { label: 'Payments', to: routes.index.route },
    { label: 'Refund', to: routes.index.route },
    { label: 'Checkout', to: routes.index.route },
    { label: 'Shipping', to: routes.index.route },
    { label: 'Q&A', to: routes.index.route },
    { label: 'Privacy Policy', to: routes.index.route },
  ],
}

const CONTACTS_LIST: TNavigationSection = {
  heading: 'Contacts',
  items: [
    { to: routes.index.route, label: '+44 20 7234 3456' },
    { to: routes.index.route, label: '+44 20 7234 3456' },
    { to: routes.index.route, label: '+44 20 7234 3456' },
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
    </footer>
  )
}

export const Footer = React.memo(_Footer)
