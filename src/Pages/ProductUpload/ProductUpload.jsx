import React from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';

const ProductUpload = () => {

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

                <form action="#">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="card p-4">
                                <h5>Basic Information</h5>
                                
                                <div className="form-group">
                                    <h6>TITLE</h6>
                                    <input type="text" />
                                </div>
                                <div className="form-group">
                                    <h6>DESCRIPTION</h6>
                                    <textarea rows={10} cols={10}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-5">

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductUpload
