import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../../vms/shared/header"
import Toolbar from '@mui/material/Toolbar';

import styled from "styled-components"
import ListAccordian from './ListAccordian';
const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`
export default function Resume() {
  return (
    <Box sx={{ display: 'flex', backgroundColor:'white'  }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3, pt:3, backgroundColor:'white' }}>
        <Toolbar />
     {/* <Distribution /> */}
     <ListAccordian />
      </ContentBox>
</Box>
  )
}
