import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)
  const removeCount = () => setCount(count - 1)
  return (
    <>
      <h1>Hello! My count is {count}</h1>
      <button onClick={addCount}>Add Count</button>
      <button onClick={removeCount}>Remove Count</button>
    </>
  )
}

export default App
