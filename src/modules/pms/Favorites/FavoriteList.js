import React from "react";
import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';
import { deepOrange } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Divrow = styled.div`
  display: flex;
  flex-direction: column;
  padding:20px;
  justify-content: space-between;
  height: 113px;
`;
const DivIconrow = styled.div`
  display: flex;
  flex-direction: column;
  position:absolute;
  right:10px;
  top:10px;
  height:125px;
  justify-content:space-between;   
`;
const BorderSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;
const BorderHr = styled.div`
  width: 100px;
  height: 0;
  margin-top: 20px;
  border-bottom: 3px solid #f24f17;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
`;
const ProductOverlay = styled.div`
width: 300px;
height: 300px;
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(17, 17, 17, 0.8) 100%);
// border-radius: 10px;
position:relative;
opacity:0;
 position:absolute;
`
const ProductCard = styled.div`
width: 300px;
height: 413px;
border: 1px solid rgba(31, 31, 31, 0.2);
box-sizing: border-box;
border-radius: 10px;
overflow:hidden;
position:relative;
 &:hover{
     ${ProductOverlay}{
         opacity:1;
         transition:0.2s ease-in-out;
     }
 }
`

const IconDiv = styled.div`
background: #ffff;
border-radius: 50%;
width: 35px;
height: 35px;
padding: 7px;
display: flex;
align-items: center;
justify-content: center;

`
const ProductContent = styled.div`
width: 300px;
height: 300px;
// border-radius: 10px;
overflow:hidden;
background: #C4C4C4;
`
const ProductNameSpan = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
`
const BrandNameSpan = styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 17px;
color: #1F1F1F;
`
const NumberSpan = styled.span`

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #1F1F1F;
`
export default function FavoriteList() {
  return (
    <>
      <TopDiv>
        <Divrow>
          <BorderSpan>Favorites</BorderSpan>
          <BorderHr />
        </Divrow>
      </TopDiv>
      BACK BTN
      <FlexDiv>
        <FlexDiv>
          Folder Name
          <FlexDiv>pencil</FlexDiv>
          <FlexDiv>delte</FlexDiv>
        </FlexDiv>
        <FlexDiv>
          <FlexDiv>search</FlexDiv>
          <FlexDiv>selected</FlexDiv>
          <FlexDiv>
            Total <span>50</span>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv>
        <div>
          Material & Items<span>50</span>
        </div>
        <div>View all</div>
      </FlexDiv>
      <div> {/* card container div */}
        <ProductCard>{/* product card div */}
          <ProductOverlay>
          <Checkbox
      sx={{
       color: grey[100],
       '&.Mui-checked': {
         color: deepOrange[600],
       },
     }}
   />
          </ProductOverlay>
          <ProductContent> 
< img src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <DivIconrow>
              <IconDiv> <img src="../close.svg" /> </IconDiv>
              <IconDiv> <img src="../shoppingcart.svg" /> </IconDiv>
              <IconDiv> <img src="../star.svg" /> </IconDiv>
</DivIconrow>
</ProductContent>

          <Divrow>
            <ProductNameSpan> Material Name </ProductNameSpan>
            <BrandNameSpan> Brand Name </BrandNameSpan>
            <span>  <img src="../SaveIcon.svg" /><NumberSpan>1002</NumberSpan></span>
          </Divrow>
        </ProductCard>
        <ProductCard>{/* product card div */}
          <ProductOverlay>
          <Checkbox
      sx={{
       color: grey[100],
       '&.Mui-checked': {
         color: deepOrange[600],
       },
     }}
   />
          </ProductOverlay>
          <ProductContent> 
< img src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <DivIconrow>
              <IconDiv> <img src="../close.svg" /> </IconDiv>
              <IconDiv> <img src="../shoppingcart.svg" /> </IconDiv>
              <IconDiv> <img src="../star.svg" /> </IconDiv>
</DivIconrow>
</ProductContent>

          <Divrow>
            <ProductNameSpan> Material Name </ProductNameSpan>
            <BrandNameSpan> Brand Name </BrandNameSpan>
            <span>  <img src="../SaveIcon.svg" /><NumberSpan>1002</NumberSpan></span>
          </Divrow>
        </ProductCard>
        <ProductCard>{/* product card div */}
          <ProductOverlay>
          <Checkbox
      sx={{
       color: grey[100],
       '&.Mui-checked': {
         color: deepOrange[600],
       },
     }}
   />
          </ProductOverlay>
          <ProductContent> 
< img src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <DivIconrow>
              <IconDiv> <img src="../close.svg" /> </IconDiv>
              <IconDiv> <img src="../shoppingcart.svg" /> </IconDiv>
              <IconDiv> <img src="../star.svg" /> </IconDiv>
</DivIconrow>
</ProductContent>

          <Divrow>
            <ProductNameSpan> Material Name </ProductNameSpan>
            <BrandNameSpan> Brand Name </BrandNameSpan>
            <span>  <img src="../SaveIcon.svg" /><NumberSpan>1002</NumberSpan></span>
          </Divrow>
        </ProductCard>
        <ProductCard>{/* product card div */}
          <ProductOverlay>
          <Checkbox
      sx={{
       color: grey[100],
       '&.Mui-checked': {
         color: deepOrange[600],
       },
     }}
   />
          </ProductOverlay>
          <ProductContent> 
< img src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    <DivIconrow>
              <IconDiv> <img src="../close.svg" /> </IconDiv>
              <IconDiv> <img src="../shoppingcart.svg" /> </IconDiv>
              <IconDiv> <img src="../star.svg" /> </IconDiv>
</DivIconrow>
</ProductContent>

          <Divrow>
            <ProductNameSpan> Material Name </ProductNameSpan>
            <BrandNameSpan> Brand Name </BrandNameSpan>
            <span>  <img src="../SaveIcon.svg" /><NumberSpan>1002</NumberSpan></span>
          </Divrow>
        </ProductCard>
        
      </div>
      <FlexDiv>
          <span>back</span> 
          <span>next</span> 
      </FlexDiv>
      < hr />
      <FlexDiv>
        <div>
          Material & Items<span>50</span>
        </div>
        <div>View all</div>
      </FlexDiv>
      <div> {/* card container div */}
        <div>{/* product card div */}
         card
        </div>
      </div>
      <FlexDiv>
          <span>back</span> 
          <span>next</span> 
      </FlexDiv>
    </>
  );
}
