import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path='/' exact={true} element={<Dashboard />} />
            <Route path='/dashboard' exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
