import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./index.css";

const Buttons = styled(Button)`
  font-family: "Roboto" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 17px !important;
  line-height: 23px !important;
  color: black !important;
`;
const ButtonProfile = styled(Button)`
  background: #f24f17 !important;
  border-radius: 5px !important;
  width: 221px !important;
  height: 64px !important;
  border-radius: 5px !important;
  font-family: "Inter" !important;
  font-style: normal !important;
  font-weight: 600 !important;
  font-size: 20px !important;
  line-height: 24px !important;

  color: #ffffff !important;
`;

const Para = styled.p`
  margin-left: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem !important;
  line-height: 24px;
  color: #1f1f1f;
`;
const SubList = styled.ul`
  margin-left: 70px;
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #1f1f1f;
`;

const subListItem = styled.li`
  margin-bottom: 14px;
`;

const drawerWidth = 330;

export default function ClippedDrawer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [hidden, setHidden] = useState(true);
  const [content, setContent] = useState(true);
  const [orders, setOrders] = useState(true);
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: "white" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "black" }}
          >
            <img src="/images/ml-icon.svg"></img>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
                <Typography textAlign="center">Jobs</Typography>
                <Typography textAlign="center">Portfolio</Typography>
                <Typography textAlign="center">Blogs</Typography>
                <Typography textAlign="center">Utility Tools</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Home
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Jobs
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Portfolio
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blogs
            </Buttons>
            <Buttons
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Utility Tools
            </Buttons>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/message.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/Notification-icon.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/profile.svg"></img>
              </button>
            </Tooltip>
            <Tooltip title="Open settings">
              <button className="header-button" onClick={handleOpenUserMenu}>
                <img className="header-icon" src="/images/shopping-cart.svg"></img>
              </button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">sachin</Typography>
                <Typography textAlign="center">sachin</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          backgroundColor: "#f5f5f5",
          display: { md: "flex" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Toolbar />
        <Box sx={{ overflow: "auto" }} style={{ paddingLeft: "16%" }}>
          <Para>Dashboard</Para>
          <List>
            <ListItem button onClick={() => setHidden(!hidden)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                className={!hidden ? "active-button" : "disable-button"}
              >
                Profile Details
              </ListItemText>
              <ListItemIcon>
                {!hidden ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </ListItemIcon>
            </ListItem>

            <SubList hidden={hidden}>
              <Link to="/kyc">
                <li className="li-item">KYC Details</li>
              </Link>
              <Link to="/contact">
                <li className="li-item">Contact</li>
              </Link>
              <Link to="/branch">
                <li className="li-item">Branch Details</li>
              </Link>
              <li className="li-item">Locations Served</li>
              <Link to="/bankDetails">
              <li className="li-item">Bank Details</li>
              </Link>
              <Link to="/distribution">
                <li className="li-item">Distribution Network</li>
              </Link>
            </SubList>
          </List>
          <List>
            <ListItem button onClick={() => setContent(!content)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                className={!content ? "active-button" : "disable-button"}
              >
                Content
              </ListItemText>
              <ListItemIcon>
                {!content ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </ListItemIcon>
            </ListItem>
            <SubList hidden={content}>
              <li className="li-item">KYC Details</li>
              <li className="li-item">Contact</li>
              <li className="li-item">Branch Details</li>
              <li className="li-item">Locations Served</li>
              <li className="li-item">Bank Details</li>
              <Link to="/distribution">
                <li className="li-item">Distribution Network</li>
              </Link>
            </SubList>
          </List>
          <List>
            <ListItem button onClick={() => setOrders(!orders)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                className={!orders ? "active-button" : "disable-button"}
              >
                Orders
              </ListItemText>
              <ListItemIcon>
                {!orders ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </ListItemIcon>
            </ListItem>
            <SubList hidden={orders}>
              <li className="li-item">KYC Details</li>
              <li className="li-item">Contact</li>
              <li className="li-item">Branch Details</li>
              <li className="li-item">Locations Served</li>
              <li className="li-item">Bank Details</li>
              <Link to="/distribution">
                <li className="li-item">Distribution Network</li>
              </Link>
            </SubList>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>
                Profile Details</ListItemText>
            </ListItem>
          </List>


          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <Link to="/resume">
              <ListItemText>Resume</ListItemText>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
