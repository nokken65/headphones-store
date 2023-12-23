import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'styled-components'

type DisclosureProps = {
  label?: string
} & React.PropsWithChildren

const S = {
  Disclosure: styled.div`
    overflow: hidden;
  `,
  Label: styled.button``,
  Body: styled.div`
    padding: 2rem;
    border: 2px solid blue;
  `,
}

const Disclosure = ({ children, label }: DisclosureProps) => {
  const [isExpanded, setIsExpanded] = React.useState(true)

  const id = React.useId()

  return (
    <S.Disclosure>
      <S.Label
        aria-controls={id}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(prev => !prev)}
      >
        {label}
      </S.Label>
      <AnimatePresence>
        {isExpanded && (
          <S.Body
            animate={{ y: 0 }}
            as={motion.div}
            exit={{ y: '-100%' }}
            id={id}
            initial={{ y: '-100%' }}
            transition={{
              duration: 0.2,
              type: 'keyframes',
            }}
          >
            {children}
          </S.Body>
        )}
      </AnimatePresence>
    </S.Disclosure>
  )
}

export { Disclosure }
