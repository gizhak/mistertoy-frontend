import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './assets/style/main.css'

import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <Link to="/home">
      <h1>Mister Toy</h1>
      <p>Click here to enter the app</p>
    </Link>
    // </div>
  )
}

export default App
