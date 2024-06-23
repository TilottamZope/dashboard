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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';

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


};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showBy, setShowBy] = React.useState('');
  const [showCatBy, setShowCatBy] = React.useState('');
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

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className='hd'>Best Selling Products</h3>

          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>SHOW BY</h4>
              <FormControl size='small' className='w-100'>
                <InputLabel id="demo-simple-select-label">Row</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={showBy}
                  label="Age"
                  onChange={(e) => setShowBy(e.target.value)}
                  className='w-100'
                // displayEmpty
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3">
              <h4>CATEGORY BY</h4>
              <FormControl size='small' className='w-100'>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={showCatBy}
                  label="Age"
                  onChange={(e) => setShowCatBy(e.target.value)}
                  className='w-100'
                // displayEmpty
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead className='thead-dark'>
                <tr>
                  <th>NO.</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="row">
                        <div className="col-2">
                          <div className="imageWrapper">
                            <div className="img">
                              <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL.jpg" alt="Product Image Not Found" className='w-100' />
                            </div>
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="info">
                            <h6>Lorem ipsum dolor sit amet...</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>


                    </div>
                  </td>
                  <td>Category1</td>
                  <td>newbrand</td>
                  <td>
                    <div style={{ width: '70px' }}>
                      <del className='old'>Rs.100.00</del>
                      <span className='new text-danger'>Rs.80.00</span>
                    </div>
                  </td>
                  <td>30</td>
                  <td>4.9(16)</td>
                  <td>100</td>
                  <td>Rs.10k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className='secondary' color='secondary'><FaEye /></Button>
                      <Button className='success' color='success'><FaPen /></Button>
                      <Button className='error' color='error'><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <p>Showing <b>12</b> of <b>60</b> results</p>
              <Pagination count={10} color="primary" className='pagination'showFirstButton showLastButton/>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Dashboard
