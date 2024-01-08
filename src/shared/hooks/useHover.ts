import React from 'react'

const useHover = <T extends HTMLElement>(ref: React.RefObject<T>) => {
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current

    if (element === null) {
      return
    }

    const onPointerEnter = () => setIsHovered(true)
    const onPointerLeave = () => setIsHovered(false)

    element.addEventListener('pointerover', onPointerEnter)
    element.addEventListener('pointerleave', onPointerLeave)

    return () => {
      if (element === null) {
        return
      }

      element.removeEventListener('pointerenter', onPointerEnter)
      element.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return isHovered
}

export { useHover }
