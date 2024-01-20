import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ClippedDrawer from "../header"

import styled from "styled-components"
import DetailsPms from "./DetailsPms"

const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;
`




export default function BankDetails() {
  return (
   <>
   <Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <DetailsPms />
      </ContentBox>
</Box>
   </>
  );
}
