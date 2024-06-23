import React, { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

const MyContext = createContext()

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)

  const values = {
    isToggleSidebar,
    setIsToggleSidebar
  }

  return (
    <>
      <MyContext.Provider value={values}>
        <Header />
        <div className="main d-flex">
          <div className={`sidebarWrapper ${isToggleSidebar ===true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
          <div className={`content ${isToggleSidebar ===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path='/' exact={true} element={<Dashboard />} />
              <Route path='/dashboard' exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>


    </>
  )
}

export default App
export { MyContext }
