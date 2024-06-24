import React, { useContext, useEffect, useState } from 'react'
import logo from '../../Assets/Images/Logo.png'
import googleIcon from '../../Assets/Images/googleIcon.png'
import { MyContext } from '../../App'
import pattern from '../../Assets/Images/pattern.webp'
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Login = () => {
    const context = useContext(MyContext)

    const [inputIndex, setInputIndex] = useState(null)
    const [isShowPassword, setIsShowPassword] = useState(null)

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true)
    }, [])

    const focusInput = (index) => {
        setInputIndex(index)
    }
    return (
        <>
            <img src={pattern} alt="background img not found" className='loginPattern' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center mt-1">
                        <img src={logo} alt="logo not found" width={150} />
                        <h5 className='fw-bold mt-2'>Login to Here</h5>
                    </div>

                    <div className="wrapper mt-3 card border">
                        <form action="#">
                            <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><IoMdMail /></span>
                                <input type="text" placeholder='enter your email' className='form-control' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus/>
                            </div>
                            <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input type={`${isShowPassword === true ? 'text' : 'password'}`} placeholder='enter your password' className='form-control' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />

                                <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                    {
                                        isShowPassword === true ? <IoMdEye /> : <IoMdEyeOff />
                                    }
                                </span>
                            </div>

                            <div className="form-group">
                                <Button className='btn-blue btn-lg btn-big w-100'>Sign In</Button>
                            </div>

                            <div className="form-group text-center mb-0">
                                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>

                                <div className="d-flex align-items-center justify-content-center or mt-2 mb-2">
                                    <span className='line'></span>
                                    <span className='txt'>Or</span>
                                    <span className='line'></span>
                                </div>

                                <Button className='loginWithGoogle btn-lg btn-big w-100' variant="outlined"><img src={googleIcon} width={20} alt="logo not found" />
                                    &nbsp; SIGN IN WITH GOOGLE</Button>
                            </div>
                        </form>

                    </div>
 
                    <div className="wrapper card border footer p-2 text-center">
                        <span>Don't have an account ? <Link to={'/signup'} className='link color ms-2'>Ragister</Link> </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
