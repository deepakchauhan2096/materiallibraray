import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import Branch from "./branch"
import styled from "styled-components"
import { useState,createContext } from 'react';
import { useHistory } from "react-router-dom";

import "./branch.css"

const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`








export default function ButtonAppBar() {
  


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <ClippedDrawer />
        <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          <Branch   />

        </ContentBox>
      </Box>

    </>
  );
}
{/* <Box>
<ClippedDrawer />

<Branch />
</Box> */}





