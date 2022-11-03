import { useState } from 'react'
import './App.css'
import NavBar from './components/Menu/NavBar'
import Greeting, { GreetingTitle } from './components/Menu/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <NavBar/>
        <GreetingTitle/>
        <Greeting name='Molle' />
        <Greeting name='Espinillo' />
        <Greeting name='Quebracho' />
        <Greeting name='Aromito' />
    </div>

    
    
  )
}

export default App
