import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Getusers from './Pages/Getusers'
import Addusers from './Pages/Addusers'
import Updateusers from './Pages/Updateusers'
// import './App.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Getusers/>}/>
      <Route path='/adduser' element={<Addusers/>}/>
      <Route path='/updateuser/:id' element={<Updateusers/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
