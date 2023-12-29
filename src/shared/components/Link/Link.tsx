import React from 'react'

import clsx from 'clsx'

import * as styles from './Link.css'

type LinkProps = React.ComponentPropsWithRef<'a'>

const _Link = ({ children, className, ...props }: LinkProps, ref: React.Ref<HTMLAnchorElement>) => {
  return (
    <a {...props} className={clsx(styles.link, className)} ref={ref}>
      {children}
    </a>
  )
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(_Link)

export { Link }
