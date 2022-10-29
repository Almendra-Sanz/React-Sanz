import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/menu'


function Primera() {

  return <h1>Hola almi</h1>

}

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Menu/>
    </div>
    
  )
}

export default App
