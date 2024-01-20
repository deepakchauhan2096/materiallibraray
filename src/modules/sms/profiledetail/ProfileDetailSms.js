import React from 'react'
import styled from 'styled-components'
import MuiPhoneNumber from 'material-ui-phone-number';
import { useState } from 'react'
import { style } from '@mui/system';
import {FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {ImPinterest2} from 'react-icons/im'
import {BsBehance} from 'react-icons/bs'
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const TopDiv = styled.div`
display:flex; 
align-items:center;
justify-content:space-between;
`
const Divrow = styled.div`
display:flex;
flex-direction:column;
`
const BorderSpan= styled.span`
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 30px;
`
const BorderHr = styled.div`
width: 100px;
height:0;
border-bottom: 3px solid #F24F17;
`
const SaveBtn = styled.button`
width: 150px;
    height: 50px;
   
    background: #ffffff;
    border: 2px solid #f24f17;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    color: #f24f17;
`
const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
margin-top:15px;
position:relative;
`
const LabelP = styled.p`
font-family: 'Inter';
margin:0;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #1F1F1F;`

const ContactInput = styled.input`
max-width: 405px;
width:55%;
margin-right:1%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
margin-top:11px;

::placeholder{
 color:1f1f1f !important;
 opacity:0.9;
}

`
const ContentDiv=styled.div`
max-width: 822px;

`
const PlusDiv = styled.div`
width: 50px;
height: 55px;
margin-right:1%;
border: 1px solid rgba(31, 31, 31, 0.5);
border-radius: 5px;
display:flex;
align-items: center;
justify-content: center!important;
`
const MailInput = styled.input`
max-width:760px;
width:94%;
margin-right:1%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
 `
 const PhnInput = styled(MuiPhoneNumber)`
 background: #FFFFFF !important;
 border: 1px solid rgba(31, 31, 31, 0.5) !important;
 box-sizing: border-box !important;
 border-radius: 5px !important;
 max-width: 760px!important;
 margin-right:1%!important;
 width:94%!important;
 height: 55px;
 }
 `
 const DateInput = styled.input`
 max-width:812px;
width:100%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
display:flex;
flex-direction:row-reverse;
font-size:23px;
 `
 const SocialInput = styled.input`
 max-width:820px;
width:100%;
margin-right:1%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
padding-left:4%;
 `
export default function ProfileDetailSms() {
  const [phone, setPhone] = useState("")

  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    }
  }
  const [value, setValue] = useState(new Date());

  return (
   <>
     <TopDiv>
     <Divrow>
      <BorderSpan>Personal Details</BorderSpan>
      <BorderHr/>
      </Divrow>
      <SaveBtn >SAVE</SaveBtn>
    </TopDiv>
      <ContentDiv>
    <LabelP>Contact Name*</LabelP>
    <FlexDiv>
     
    <ContactInput placeholder='First Name'/>
   <ContactInput placeholder='Last Name'/>
    </FlexDiv>  
    <LabelP>Email ID*</LabelP>
    <FlexDiv>
   <MailInput placeholder='fullname@gmail.com'/>
     <PlusDiv>
     <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 6.04102V22.9577" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.04102 14.5H22.9577" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

   </PlusDiv>
   </FlexDiv>
   <LabelP>Phone number*</LabelP>
    <FlexDiv>
    <PhnInput
                    name="phone"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={phone}
                    onChange={handlePhoneChange}
                    className="phn-input"
                  />
    <PlusDiv>
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 6.04102V22.9577" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.04102 14.5H22.9577" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

   </PlusDiv>
   </FlexDiv>
   {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="year"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
   < DateInput type="date" dateFormat='dd-mm-yyyy' />
    <FlexDiv>
    < FiLinkedin style={{position:"absolute" , left:"10px"}}  />
    < SocialInput placeholder="LinkedIn-url"  />
    </FlexDiv>
    <FlexDiv>
    < FiInstagram style={{position:"absolute" , left:"10px"}} />
    < SocialInput placeholder="Instagram-url" />
    </FlexDiv>
    <FlexDiv>
    < ImPinterest2 style={{position:"absolute" , left:"10px"}} />
    < SocialInput  placeholder="Pinterest-url" />
    </FlexDiv>
    <FlexDiv>
    < BsBehance style={{position:"absolute" , left:"10px"}} />
    < SocialInput placeholder="Behance-url" />
    </FlexDiv>
    </ContentDiv>
   </>
  )
}
 