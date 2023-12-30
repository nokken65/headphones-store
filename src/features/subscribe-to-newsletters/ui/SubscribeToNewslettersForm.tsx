const SubscribeToNewslettersForm = () => {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        <input placeholder={'Enter your email address...'} type={'email'} />
      </label>
      <button type={'submit'}>Subscribe</button>
    </form>
  )
}

export { SubscribeToNewslettersForm }
