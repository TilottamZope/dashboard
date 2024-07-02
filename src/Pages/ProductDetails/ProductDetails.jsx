import React, { useRef } from 'react'

import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

import Slider from "react-slick";

import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

import { PiResizeFill } from "react-icons/pi";
import { IoIosPricetag } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VerifiedIcon from '@mui/icons-material/Verified';
import UserAvtarImg from '../../Components/UserAvtarImg/UserAvtarImg';
import Profile from '../../Assets/Images/Profile.jpg'
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaReply } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";


const StyledBreadcrumb = styled(Chip)(({ theme }) => {

    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});

const ProductDetails = () => {

    const productSliderBig = useRef();
    const productSliderSml = useRef();
    

    var productSliderOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var productSliderSmlOptions = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    const goToSlide=(index)=>{
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);
    }
    return (
        <div>
            <div className="right-content">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product View</h5>
                    <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_ "> 
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Dashboard"
                            icon={<HomeIcon fontSize="small" />}
                        />

                        <StyledBreadcrumb
                            label="Products"
                            component="a"
                            href="#"
                        />
                        <StyledBreadcrumb
                            label="Product View"

                        />
                    </Breadcrumbs>
                </div>

                <div className="card productDetailsSection">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderWrapper pt-3 pb-3 pe-4 ps-4">
                                <h6 className='mb-4'>Product Gallery</h6>
                                <Slider {...productSliderOptions} ref={productSliderBig} className='sliderBig mb-2'>

                                    <div className="item">
                                        <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UF1000,1000_QL80_.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item">
                                        <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UF1000,1000_QL80_.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item">
                                        <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UF1000,1000_QL80_.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item">
                                        <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UF1000,1000_QL80_.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item">
                                        <img src="https://m.media-amazon.com/images/I/71Dtf-ydPYL._AC_UF1000,1000_QL80_.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                     

                                </Slider>
                                <Slider {...productSliderSmlOptions}  ref={productSliderSml}className='sliderSml'>

                                    <div className="item" onClick={()=>goToSlide(1)}>
                                        <img src="https://www.jiomart.com/images/product/original/491899841/dabur-amla-juice-1-l-product-images-o491899841-p590040992-8-202203170224.jpg?im=Resize=(420,420)" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item"  onClick={()=>goToSlide(2)}>
                                        <img src="https://www.bigbasket.com/media/uploads/p/xxl/40195119-7_1-dabur-amla-ayurvedic-juice.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item"  onClick={()=>goToSlide(3)}>
                                        <img src="https://www.jiomart.com/images/product/original/491899841/dabur-amla-juice-1-l-product-images-o491899841-p590040992-5-202203170224.jpg?im=Resize=(420,420)" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item"  onClick={()=>goToSlide(4)}>
                                        <img src="https://www.bigbasket.com/media/uploads/p/xxl/40195119-7_1-dabur-amla-ayurvedic-juice.jpg" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item"  onClick={()=>goToSlide(5)}>
                                        <img src="https://www.jiomart.com/images/product/original/491899841/dabur-amla-juice-1-l-product-images-o491899841-p590040992-8-202203170224.jpg?im=Resize=(420,420)" className='w-100' alt="product img not found" />
                                    </div>
                                    <div className="item"  onClick={()=>goToSlide(6)}>
                                        <img src="https://www.jiomart.com/images/product/original/491899841/dabur-amla-juice-1-l-product-images-o491899841-p590040992-5-202203170224.jpg?im=Resize=(420,420)" className='w-100' alt="product img not found" />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="pt-3 pb-3 pe-4 ps-4">
                                <h6 className='mb-4'>Product Details</h6>
                                <h4>Dabur Amla Juice, Packaging Type: Bottle, Packaging </h4>

                                <div className="productInfo mt-3">
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><MdBrandingWatermark /></span>
                                            <span className='name'>Brand</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>Dabur</span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><BiSolidCategory /></span>
                                            <span className='name'>Category</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>Ayurvedic</span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><PiResizeFill /></span>
                                            <span className='name'>Size</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>
                                                <ul className='list list-inline tags sml'>
                                                    <li className='list-inline-item'>
                                                        <span>Sm</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>Md</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>Lg</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>1L</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>2L</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><IoIosPricetag /></span>
                                            <span className='name'>Price</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span><BsCurrencyRupee />100</span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><FaCartShopping /></span>
                                            <span className='name'>Stock</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>(68) Piece</span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><AutoAwesomeIcon /></span>
                                            <span className='name'>Review</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>(100) Review</span>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-3 d-flex align-items-center">
                                            <span className='icon'><VerifiedIcon /></span>
                                            <span className='name'>Published</span>
                                        </div>
                                        <div className="col-sm-9">
                                            :    <span>01 Jan 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">

                        <h6 className='mt-4 mb-3'>Product Descriptions</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea fuga labore corporis placeat neque aperiam nisi vero nam possimus. Ea necessitatibus vel illo consequatur fugiat expedita iure, inventore quasi, doloribus pariatur, ipsam animi omnis. Sapiente est ullam optio consequatur voluptatum velit, explicabo ab deleniti aperiam veniam quia natus iure repudiandae beatae accusantium consectetur sint? Aliquam corporis odio pariatur dolor quas.</p>

                        <br />

                        <h6 className='mt-4 mb-3'>Rating Analytics</h6>
                        <div className="ratingSection">
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    5 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '70%' }}>

                                        </div>
                                    </div>

                                </div>
                                <span className="col3">
                                    (22)
                                </span>

                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    4 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '50%' }}>

                                        </div>
                                    </div>

                                </div>
                                <span className="col3">
                                    (20)
                                </span>
                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    3 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '25%' }}>

                                        </div>
                                    </div>

                                </div>
                                <span className="col3">
                                    (15)
                                </span>

                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    2 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '20%' }}>

                                        </div>
                                    </div>

                                </div>
                                <span className="col3">
                                    (10)
                                </span>

                            </div>
                            <div className="ratingrow d-flex align-items-center">
                                <span className="col1">
                                    1 Star
                                </span>

                                <div className="col2">
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '10%' }}>

                                        </div>
                                    </div>

                                </div>
                                <span className="col3">
                                    (2)
                                </span>

                            </div>
                        </div>


                        <br />

                        <h6 className='mt-4 mb-3'>Customer_reviews</h6>

                        <div className="reviewsSection">
                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvtarImg img={Profile} lg={true} alt="Profile Not Found" />
                                                <div className="info ps-2">
                                                    <h6>Tilottam Zope</h6>
                                                    <span>25 minutes ago</span>
                                                </div>
                                            </div>

                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>


                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ms-auto">
                                            <Button className='btn-blue btn-big btn-lg ms-auto'><FaReply /> &nbsp; Reply</Button>
                                        </div>

                                    </div>


                                    <p className='pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus earum labore explicabo minima veniam, fuga odio fugiat voluptatum exercitationem commodi!</p>
                                </div>
                            </div>

                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvtarImg img={Profile} lg={true} alt="Profile Not Found" />
                                                <div className="info ps-2">
                                                    <h6>Tilottam Zope</h6>
                                                    <span>25 minutes ago</span>
                                                </div>
                                            </div>

                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>


                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ms-auto">
                                            <Button className='btn-blue btn-big btn-lg ms-auto'><FaReply /> &nbsp; Reply</Button>
                                        </div>

                                    </div>


                                    <p className='pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus earum labore explicabo minima veniam, fuga odio fugiat voluptatum exercitationem commodi!</p>
                                </div>
                            </div>

                            <div className="reviewsRow">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvtarImg img={Profile} lg={true} alt="Profile Not Found" />
                                                <div className="info ps-2">
                                                    <h6>Tilottam Zope</h6>
                                                    <span>25 minutes ago</span>
                                                </div>
                                            </div>

                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>


                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ms-auto">
                                            <Button className='btn-blue btn-big btn-lg ms-auto'><FaReply /> &nbsp; Reply</Button>
                                        </div>

                                    </div>


                                    <p className='pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus earum labore explicabo minima veniam, fuga odio fugiat voluptatum exercitationem commodi!</p>
                                </div>
                            </div>

                            <div className="reviewsRow reply">
                                <div className="row">
                                    <div className="col-sm-7 d-flex">
                                        <div className="d-flex flex-column">
                                            <div className="userInfo d-flex align-items-center mb-3">
                                                <UserAvtarImg img={Profile} lg={true} alt="Profile Not Found" />
                                                <div className="info ps-2">
                                                    <h6>Tilottam Zope</h6>
                                                    <span>25 minutes ago</span>
                                                </div>
                                            </div>

                                            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        </div>


                                    </div>

                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="ms-auto">
                                            <Button className='btn-blue btn-big btn-lg ms-auto'><FaReply /> &nbsp; Reply</Button>
                                        </div>

                                    </div>


                                    <p className='pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus earum labore explicabo minima veniam, fuga odio fugiat voluptatum exercitationem commodi!</p>
                                </div>
                            </div>
                        </div>

                        <br />

                        <h6 className='mt-4 mb-3'>Review Reply Form</h6>
                        <form action="#" className='reviewForm'>
                            <textarea placeholder='write here...' className='mb-4'></textarea>

                            <Button className='btn-blue btn-big btn-lg w-100'>Drop your replies</Button>
                        </form>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
