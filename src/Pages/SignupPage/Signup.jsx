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
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BiSolidHome } from "react-icons/bi";



const Signup = () => {
    const context = useContext(MyContext)

    const [inputIndex, setInputIndex] = useState(null)
    const [isShowPassword, setIsShowPassword] = useState(null)
    const [isShowConformPassword, setIsShowConformPassword] = useState(null)

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true)
        window.scrollTo(0,0)

    }, [])

    const focusInput = (index) => {
        setInputIndex(index)
    }
    return (
        <>
            <img src={pattern} alt="background img not found" className='loginPattern' />
            <section className="loginSection signUpSection">
                <div className="row">
                    <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
                        <h3>WELCOME TO <span className='text-danger'>HEALTHMEDI+</span> WEBSITE DASHBOARD AND ADMIN PANNEL</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime deserunt rem repellat voluptates, cupiditate recusandae adipisci, consequuntur odit consectetur, quidem quae ut nam enim qui labore voluptas aliquid dolor?</p>

                        <div className="w-100 mt-2">
                            <Link to={'/'}><Button className='btn-blue btn-big btn-lg'> <BiSolidHome/> Go To Home</Button></Link>
                        </div>
                    </div>
                    <div className="col-md-4 pr-0">
                        <div className="loginBox">
                            <div className="logo text-center mt-1">
                                <img src={logo} alt="logo not found" width={150} />
                                <h5 className='fw-bold mt-2'>Ragister A New Account</h5>
                            </div>

                            <div className="wrapper mt-3 card border">
                                <form action="#">
                                    <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><FaUserCircle /></span>
                                        <input type="text" placeholder='enter your name' className='form-control' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus/>
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><IoMdMail /></span>
                                        <input type="text" placeholder='enter your email' className='form-control' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} placeholder='enter your password' className='form-control' onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEye /> : <IoMdEyeOff />
                                            }
                                        </span>
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmarkSharp /></span>
                                        <input type={`${isShowConformPassword === true ? 'text' : 'password'}`} placeholder='conform your password' className='form-control' onFocus={() => focusInput()} onBlur={() => setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={() => setIsShowConformPassword(!isShowConformPassword)}>
                                            {
                                                isShowConformPassword === true ? <IoMdEye /> : <IoMdEyeOff />
                                            }
                                        </span>
                                    </div>
                                    <FormControlLabel control={<Checkbox />} label="I Agree to all Terms & Condition" />
                                    <div className="form-group">
                                        <Button className='btn-blue btn-lg btn-big w-100'>Sign Up</Button>
                                    </div>

                                    <div className="form-group text-center mb-0">
                                        <div className="d-flex align-items-center justify-content-center or mt-2 mb-2">
                                            <span className='line'></span>
                                            <span className='txt'>Or</span>
                                            <span className='line'></span>
                                        </div>

                                        <Button className='loginWithGoogle btn-lg btn-big w-100' variant="outlined"><img src={googleIcon} width={20} alt="logo not found" />
                                            &nbsp; SIGN IN WITH GOOGLE</Button>
                                    </div>
                                </form>
                                <span className='text-center d-block mt-3'>have an account ? <Link to={'/login'} className='link color ms-2'>Sign In</Link> </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Signup
