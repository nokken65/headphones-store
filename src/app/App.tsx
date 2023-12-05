import { styled } from 'styled-components'

import './App.css'

function App() {
  return (
    <div className={'App'}>
      <Title>Headphones Store</Title>
    </div>
  )
}

export default App

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;
  color: #d16b8d;
`
