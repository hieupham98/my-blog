import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';

import './navbar.module.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '1em',
  backgroundColor: "#F0F2F5",

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    borderRadius: '1em',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -8,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    color: "#fff !important",
    background:"#ff4d4f"
  },
}));

const Footer: FunctionComponent = () =>  
    (<>
      <div className="footer">
        <Container> 
          <div className="row footer_top py-5 border-top border-bottom">
            <div className="col-6">
              <b> KNOWLEDGE </b>
            </div>
            <div className="col-6">
            </div>
          </div>
          <div className="row footer_bottom py-4">
            <div className="col-6">
            <ul className="nav">
              <li className="nav-item menu-footer">
                <span className="nav-link" aria-current="page">Contact Us</span>
              </li>
              <li className="nav-item menu-footer">
                <span className="nav-link "> Terms of Use </span>
              </li>
              <li className="nav-item menu-footer">
                <span className="nav-link"> Advertise with Me </span>
              </li>
{/*               
              <li className="nav-item menu-top">
                <span className="nav-link"> 
                  <StyledBadge badgeContent={'hot'}>
                    Profile Online 
                  </StyledBadge>
                </span>
              </li> */}
            </ul>
            </div>
              
            <div className="col-6 ">
              <div className="row justify-content-end copy-right">
                 @2021. All right reserved
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>);
;

export default Footer;