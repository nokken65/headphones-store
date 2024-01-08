import React from 'react'

const useScrollX = <SelectorReturn>(selector?: (scrollX: number) => SelectorReturn) => {
  const scrollX = React.useSyncExternalStore(subscribe, () =>
    selector === undefined ? window.scrollX : selector(window.scrollX)
  )

  return scrollX
}

const useScrollY = <SelectorReturn>(selector?: (scrollY: number) => SelectorReturn) => {
  const scrollY = React.useSyncExternalStore(subscribe, () =>
    selector === undefined ? window.scrollY : selector(window.scrollY)
  )

  return scrollY
}

function subscribe(callback: VoidFunction) {
  window.addEventListener('scroll', callback)

  return () => window.removeEventListener('scroll', callback)
}

export { useScrollX, useScrollY }
