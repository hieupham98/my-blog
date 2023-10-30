import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router'

import { AppBar, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { 
  Badge,
  Avatar,
  Typography
} from '@mui/material';
import Popover from '@mui/material/Popover';
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';

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

const NavBar: FunctionComponent = () =>  {
  const router = useRouter()

  const active = router.asPath.split('/')[1];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick: any = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose: any = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

   return  (<>
    <AppBar
      position="fixed"
      className="navBar"
    >
      <Toolbar className="justify-content-between">
        <Link href="/">
          <span className="logo">
            <span>
              <img src="/static/logo.jpg" alt="logo" width="30px" />
            </span>
            <span className="ml-2">
              CODE4LIFE
            </span>
              
          </span>
        </Link>
        <ul className="nav">
          <Link href="/">
            <li className={`nav-item menu-top ${active === '' ? 'active' : ''}` }>
              <span className="nav-link" aria-current="page"><HomeIcon /></span>
            </li>
          </Link>
          <Link href="/it">
          <li className={`nav-item menu-top ${active === 'it' ? 'active' : ''}` }>
              <span className="nav-link "> Code </span>
            </li>
          </Link>
          <Link href="/life">
            <li className={`nav-item menu-top ${active === 'achitecture' ? 'active' : ''}` }>
              <span className="nav-link"> Life </span>
            </li>
          </Link>
          {/* <Link href="/achitecture">
            <li className={`nav-item menu-top ${active === 'achitecture' ? 'active' : ''}` }>
              <span className="nav-link"> Achitecture </span>
            </li>
          </Link>
          <Link href="/vn-history">
            <li className={`nav-item menu-top ${active === 'vn-history' ? 'active' : ''}` }>
              <span className="nav-link"> VN History </span>
            </li>
          </Link>
          <li className="nav-item menu-top">
            <span className="nav-link"> 
              <StyledBadge badgeContent={'develop'}>
                Profile Online 
              </StyledBadge>
            </span>
          </li> */}
        </ul>
        <div className="d-flex">
          <Search >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          </Search>
          <div>
            <div className="cursor-pointer menu-user-button" aria-describedby={id}  >
              <Avatar sx={{ bgcolor: 'orange' }}  onClick={handleClick}>N</Avatar>
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 2 }}> Login </Typography>
            </Popover>
          </div>
        </div>
      </Toolbar>
    </AppBar>
    </>)};
;

export default NavBar;