import 'tailwindcss/tailwind.css'
import Login from './Home/screens/credentials/Login'
import Signup from './Home/screens/credentials/Signup'
import Homescreen from "./Home/Homescreen"

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </>
  )

}

export default App
