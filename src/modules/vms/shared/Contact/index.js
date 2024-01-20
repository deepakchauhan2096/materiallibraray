import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import Contact from "./Contact"
import styled from "styled-components"
const ContentBox = styled(Box)`
${'' /* margin: 0 3% 0 1% !important; */}
padding: 0 !important;
  
`





export default function ContactAppBar() {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
    <ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
    <Contact />
    </ContentBox>
</Box>

</>
  );
}
