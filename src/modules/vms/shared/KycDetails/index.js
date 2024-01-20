import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import KycDetails from "./KycDetails";
import styled from "styled-components"
const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`





export default function KycAppBar() {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <KycDetails/>
      </ContentBox>
</Box>

</>
  );
}
