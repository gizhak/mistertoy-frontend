import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './assets/style/main.css'

import { Provider } from 'react-redux'
import { store } from './store/store.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <h1> Mister Toy</h1>
      </Provider>
    </>
  )
}

export default App
