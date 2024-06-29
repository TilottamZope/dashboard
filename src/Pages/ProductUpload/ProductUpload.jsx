import React from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";

const ProductUpload = () => {

    const [categoryVal, setCategoryVal] = React.useState('');
    const [brandVal, setBrandVal] = React.useState('');

    const handleChangeCategory = (event) => {
        setCategoryVal(event.target.value);
    };

    const handleChangeBrand = (event) => {
        setBrandVal(event.target.value);
    };

    const [ratingValue, setRatingValue] = React.useState(2);


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
    return (
        <div>
            <div className="right-content">
                <div className="card shadow border-0 w-100 flex-row p-4">
                    <h5 className="mb-0">Product Upload</h5>
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
                            label="Product upload"

                        />
                    </Breadcrumbs>
                </div>

                <form action="#" className='form'>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card p-4">
                                <h5 className='mb-4'>Basic Information</h5>

                                <div className="form-group">
                                    <h6>TITLE</h6>
                                    <input type="text" />
                                </div>
                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={5} cols={10} />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>CATEGORY</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>BRAND</h6>
                                            <Select
                                                value={brandVal}
                                                onChange={handleChangeBrand}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>REGULAR PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <h6>DISCOUNT PRICE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>SIZE</h6>
                                            <Select
                                                value={categoryVal}
                                                onChange={handleChangeCategory}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                                className='w-100'
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PRODUCT STOCK</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <h6>RATING</h6>
                                             <Rating
                                                name="simple-controlled"
                                                value={ratingValue}
                                                onChange={(event, newValue) => {
                                                    setRatingValue(newValue);
                                                }}
                                            /> 
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <h6>PUBLISHED DATE</h6>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>

                                <br />

                                <Button className='btn-blue btn-lg btn-big'><FaCloudUploadAlt /> &nbsp; PUBLISH & VIEW</Button>
                            </div>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductUpload
