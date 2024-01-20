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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
          backgroundColor: "blue",
          display: { md: "flex" },
          width: "413px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "413px",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }} style={{ paddingLeft: "0", paddingTop: "40px", backgroundColor: "#E5E5E5", height: "936px" }}>
          <div className="pms-siderbar-container">
            <div className="profile_image">
              <img src="images/Ellipse.png" alt="Avatar" className="pms_profile_logo" />
            </div>

            <div className="profile_detail">
              <div className="pms_hello">Hello!</div>
              <div className="pms_profile_name">Suhana Patel</div>
              <span className="pms_proile_mail none"><img src="icons/mail.svg" alt="mail" /> suhanapatel@gmail.com</span>
            </div>

            <div className="pms_sidebar_contents_box">
              <div className="pms_sidebar_contents">
                <span><img src="icons/user.svg" alt="mail" /> Personal Details</span>
              </div>
              <div className="pms_sidebar_contents">
                <span><img src="icons/credit-card.svg" alt="mail" /> Bank Details</span>
              </div>
              <div className="pms_sidebar_contents">
                <span ><img src="icons/resume.svg" alt="mail" /> Resume</span>
              </div>
              <div className="pms_sidebar_contents">
                <span ><img src="icons/Projects.svg" alt="mail" /> Projects</span>
              </div>
              <div className="pms_sidebar_contents">
                <span ><img src="icons/products.svg" alt="mail" /> Products</span>
              </div>
              <div className="pms_sidebar_contents">
                <span ><img src="icons/favourites.svg" alt="mail" /> Favourites</span>
              </div>
              <div className="pms_sidebar_contents">
                <span><img src="icons/edit.svg" alt="mail" /> Manage Blogs</span>
              </div>

              <div className="pms_sidebar_contents none">
                <span><img src="icons/briefcase.svg" alt="mail" /> My Jobs</span>
              </div>
              <div >
                <List style={{ padding: 0, margin: 0, }} >
                  <ListItem button onClick={() => setHidden(!hidden)} style={{ padding: 0, margin: 0}}>

                    <div
                      className={!hidden ? "active-button" : "disable-button"} style={{ padding: 0, margin: 0, width: "100% !important" }}
                    >
                      <span className="pms_sidebar_contents"><img src="icons/briefcase.svg" alt="mail" /> Manage Jobs{!hidden ? <ExpandMoreIcon /> : <ExpandMoreIcon />}</span>
                    </div>

                  </ListItem>
                  <SubList hidden={hidden} style={{ padding: 10, margin: 0, }}>
                    <li className="li-item">content 1</li>
                    <li className="li-item">content 2</li>
                    <li className="li-item">content 3</li>
                    <li className="li-item">content 4</li>
                    <li className="li-item">content 5</li>
                    <li className="li-item">content 6</li>
                  </SubList>
                </List>
              </div>
              <div className="pms_sidebar_contents none">
                <span ><img src="icons/userbox.svg" alt="mail" /> Teach on ML</span>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
