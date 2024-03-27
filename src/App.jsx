import { useState } from 'react'
import './App.css'
import ButtonAppBar from './components/ButtonAppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonAppBar></ButtonAppBar>
    </>
  )
}

export default App
