import { Button } from '@mui/material'
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoTimerOutline } from "react-icons/io5";

const ITEM_HEIGHT = 48;

const DashboardBox = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button className="dashboardBox" style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`
            }}>

                {
                    props.grow === true ? <span className='chart'><TrendingUpIcon /></span> : <span className='chart'><TrendingDownIcon /></span>
                }

                <div className="d-flex w-100">
                    <div className="col1">
                        <h4 className='text-white mb-0'>Total Users</h4>
                        <span className='text-white'>277</span>
                    </div>

                    <div className="ms-auto">
                        {
                            props.icon ?
                                <span span className='icon'>{props.icon ? props.icon : ''}</span> : ''
                        }
                    </div>

                </div>

                <div className="d-flex align-items-center w-100 bottomEle">
                    <h6 className='text-white mb-0 mt-0'>Last Month</h6>
                    <div className="ms-auto">
                        <Button className='ms-auto toggleIcon '><BsThreeDotsVertical onClick={handleClick} /></Button>
                        <Menu
                            className="dropdown_menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >

                            <MenuItem onClick={handleClose}>
                                <IoTimerOutline /> Last Day
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoTimerOutline /> Last Week
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoTimerOutline /> Last Month
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <IoTimerOutline /> Last Year
                            </MenuItem>
                        </Menu>
                    </div>

                </div>
            </Button>
        </>
    )
}

export default DashboardBox
