import React from 'react'
import DashboardBox from './Components/DashboardBox'
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoTimerOutline } from "react-icons/io5";
import { Button } from '@mui/material';
import { Chart } from "react-google-charts";

const ITEM_HEIGHT = 48;

export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7], // CSS-style declaration
];

export const options = {
  'backgroundColor': 'transparent',
  'chartArea': { 'width': '100%', 'height': '100%' },
  // 'color': 'white',
  

};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
              <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
              <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
              <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<BsStars />} />
            </div>
          </div>
          <div className="col-md-4 ps-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className='text-white mb-0 mt-0'>Total Sales</h6>
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
              <h3 className='text-white align-items-center w-100 bottomEle'>Rs.100,000.99</h3>
              <p>Rs.90,000.90 in Last Month</p>

              <Chart
                chartType="PieChart"
                width="100%"
                height="178px"
                data={data}
                options={options}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
