import React, { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Login from './Pages/LoginPage/Login'
import Signup from './Pages/SignupPage/Signup'

const MyContext = createContext()

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false)
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader
  }

  return (
    <>
      <MyContext.Provider value={values}>
        {
          isHideSidebarAndHeader !== true &&
          <Header />
        }


        <div className="main d-flex">
          {
            isHideSidebarAndHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
          }

          <div className={`content ${isHideSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path='/' exact={true} element={<Dashboard />} />
              <Route path='/dashboard' exact={true} element={<Dashboard />} />
              <Route path='/login' exact={true} element={<Login />} />
              <Route path='/signup' exact={true} element={<Signup />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider >


    </>
  )
}

export default App
export { MyContext }
