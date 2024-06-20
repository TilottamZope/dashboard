import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'

function App() {

  return (
   <>
   <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Dashboard/>}/>
      <Route path='/dashboard' exact={true} element={<Dashboard/>}/>
    </Routes>
   </>
  )
}

export default App
