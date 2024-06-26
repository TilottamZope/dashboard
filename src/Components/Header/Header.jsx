import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/Logo.png'
import { Button, Divider } from '@mui/material'
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Searchbox from '../Searchbox/Searchbox';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Profile from '../../Assets/Images/Profile.jpg'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { GrPowerReset } from "react-icons/gr";
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../../App';
import UserAvtarImg from '../UserAvtarImg/UserAvtarImg';


const Header = () => {

    const context = useContext(MyContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);
    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpennotificationsDrop = () => {
        setisOpennotificationDrop(true)
    }

    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false)
    }

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        <div className="col-sm-2 part1">
                            <Link to={'/'}><img src={Logo} alt="Logo Not Found" className='logo' /></Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center part2">
                            <Button className='rounded-circle me-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar === false ? < MdMenuOpen /> : <MdOutlineMenu />
                                }

                            </Button>
                            <Searchbox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className='rounded-circle me-3' onClick={() => context.setThemeMode(!context.themeMode)}>
                                {
                                    context.themeMode === false ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
                                }
                            </Button>
                            <Button className='rounded-circle me-3'><MdOutlineShoppingCart /></Button>

                            <Button className='rounded-circle me-3'><MdOutlineMail /></Button>
                            <div className="dropdownWrapper position-relative">
                                <Button className='rounded-circle me-3' onClick={handleOpennotificationsDrop}><FaRegBell /></Button>
                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className='notifications dropdown_list'
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <div className="head ps-3 pb-0">
                                        <h4>Orders (10) </h4>
                                    </div>

                                    <Divider className='mb-1' />
                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem><MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem><MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem><MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem><MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem><MenuItem onClick={handleCloseMyAccDrop}>
                                            <div className="d-flex ">
                                                <div>
                                                    <div className="userImg">
                                                        <span className="rounded-circle">
                                                            <img src={Profile} alt="Profile Not Found" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Tilottam Zope</b>
                                                            added to his favorite list
                                                            <b> Lather Belt steve madden</b>
                                                        </span>
                                                    </h4>
                                                    <p className='text-sky mb-0'>few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                    <div className="ps-3 pe-3  pt-2 pb-1">
                                        <Button className='btn-blue w-100'>View all notifinations</Button>
                                    </div>
                                </Menu>
                            </div>

                            {
                                context.isLogin !== true ? <Link to="/login"><Button className='btn-blue btn-lg btn-round'>Sign In</Button></Link> :
                                    <div className="myAccWrraper">
                                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                            <UserAvtarImg img={Profile} alt="Profile Not Found" />
                                            <div className="userInfo">
                                                <h4>Tilottam Zope</h4>
                                                <p className='mb-0'>@tilottam21</p>
                                            </div>
                                        </Button>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                My Account
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <GrPowerReset />
                                                </ListItemIcon>
                                                Reset Password
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </div>
                            }


                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
