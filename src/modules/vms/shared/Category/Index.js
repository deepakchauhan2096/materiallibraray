import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';

import styled from "styled-components"
import CategoryComponents from './CategoryComponents';
const ContentBox = styled(Box)`
margin: 0 3% 0 1% !important;

`





export default function Category() {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
     <CategoryComponents />
      </ContentBox>
</Box>

</>
  );
}