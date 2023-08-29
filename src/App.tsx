import { useState } from 'react'
import { PageLogin } from './pages/PageLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageLogin />
    </>
  )
}

export default App
