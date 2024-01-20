import * as React from 'react';
import Box from '@mui/material/Box';
import ClippedDrawer from "../header"
import Toolbar from '@mui/material/Toolbar';
import styled from "styled-components"
import FavoritePmsComponent from './FavoritePmsComponent';
import FavoriteList from './FavoriteList';
const ContentBox = styled(Box)`
margin: 0!important;
padding:60px 105px 60px 40px!important;
background-color:white!important;
`

export default function FavoritePms() {
  return (
<>
<Box sx={{ display: 'flex' }}>
    <ClippedDrawer />
<ContentBox component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
     {/* <FavoritePmsComponent /> */}
     < FavoriteList />
      </ContentBox>
</Box>

</>
  );
}