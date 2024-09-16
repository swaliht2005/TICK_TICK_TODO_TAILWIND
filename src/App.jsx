import { useState } from 'react'
import Saidebare from './saidebare'
import Menubare from './menubare'
import Contantbar from './contantbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-[100vh] w-[100vw] flex flex-colom'>
       <Saidebare/>
       <Menubare/>
      <Contantbar/>
     </div>
    </>
  )
}

export default App
