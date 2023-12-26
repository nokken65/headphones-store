import React from 'react'

const useScroll = () => {
  const [scrollY, setScrollY] = React.useState(window.scrollY)
  const [scrollX, setScrollX] = React.useState(window.scrollX)

  React.useEffect(() => {
    const getScroll = (event: Event) => {
      setScrollX((event.currentTarget as Window).scrollX)
      setScrollY((event.currentTarget as Window).scrollY)
    }

    window.addEventListener('scroll', getScroll)
  }, [])

  return { scrollX, scrollY }
}

export { useScroll }
