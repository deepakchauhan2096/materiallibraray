import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from "react-router-dom"

import "./index.css";
import styled from "styled-components";



const DrawerBox = styled(Box)`
  padding-left: 18% !important;
  padding-top: 24px;
`;
const Para = styled.p`
  margin-left: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #1f1f1f;
`;
const SubList = styled.ul`
  margin-left: 32px;
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #1f1f1f;
`;


const subListItem = styled.li`
margin-bottom: 14px;
`;


const drawerWidth = 291;

export default function ClippedDrawer() {
  const [hidden, setHidden] = useState(true);
  const [content, setContent] = useState(true);
  const [orders, setOrders] = useState(true);

  return (
    <Box sx={{ display: {md: 'flex', xs :'none'}, flex: 1 }}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
           
          },
        }}
      >
        <DrawerBox sx={{ overflow: "auto" }}>
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
            <SubList  hidden={hidden}>
              <li className="li-item">KYC Details</li>
              <Link to="/contact"><li className="li-item">Contact</li></Link>
              <li className="li-item">Branch Details</li>
              <li className="li-item">Contact</li>
       <Link to="/branch" >  <li className="li-item">Branch Details</li> </Link>
              <li className="li-item">Locations Served</li>
              <li className="li-item">Bank Details</li>
              <li className="li-item">Distribution Network</li>
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
            <SubList  hidden={content}>
              <li className="li-item">KYC Details</li>
              <li className="li-item">Contact</li>
              <li className="li-item">Branch Details</li>
              <li className="li-item">Locations Served</li>
              <li className="li-item">Bank Details</li>
              <li className="li-item">Distribution Network</li>
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
            <SubList  hidden={orders}>
              <li className="li-item">KYC Details</li>
              <li className="li-item">Contact</li>
              <li className="li-item">Branch Details</li>
              <li className="li-item">Locations Served</li>
              <li className="li-item">Bank Details</li>
              <li className="li-item">Distribution Network</li>
            </SubList>
          </List>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>Profile Details</ListItemText>
            </ListItem>
          </List>
        </DrawerBox>
      </Drawer>
    </Box>
  );
}





