const formatDate = (date: Date, options?: { separator?: string }) => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  const formattedDate = formatter.format(date).split('/')
  const separator = options?.separator ?? '.'

  return `${formattedDate[2]}${separator}${formattedDate[0]}${separator}${formattedDate[1]}`
}

export { formatDate }
