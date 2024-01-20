import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import WorkDropdown from './WorkDropdown';
import MuiPhoneNumber from 'material-ui-phone-number';

const FlexDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:15px;
margin-top:15px;
`
const LabelP = styled.p`
font-family: 'Inter';
margin:0;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #1F1F1F;`

const TextInput = styled.input`
max-width:820px;
width:100%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
margin-top:11px;
 
`
const InputArea = styled.input`
max-width:820px;
width:100%;
height: 88px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
margin-top:11px;
 
`
const ProfessionDiv = styled.div`
max-width:820px;
width:100%;
`
const MailInput = styled.input`
max-width:760px;
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
`
const ContactInput = styled.input`
max-width: 405px;
width:49%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none; 
margin-top:11px;

`
const WorkInput = styled.input`
max-width: 405px;
width:100%;
height: 55px;
left: 185px;
top: 353px;
background: #FFFFFF;
border: 1px solid rgba(31, 31, 31, 0.5);
box-sizing: border-box;
border-radius: 5px;
outline:none;
margin-top:11px;
`
const FieldDiv = styled.div`
    max-width:405px;
    width:49%;
   
    `;
    const PhnInput = styled(MuiPhoneNumber)`
    background: #FFFFFF !important;
        border: 1px solid rgba(31, 31, 31, 0.5) !important;
        box-sizing: border-box !important;
        border-radius: 5px !important;
        max-width: 760px!important;
        margin-right:1%!important;
    height: 55px;
    }
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
const ContentDiv=styled.div`
max-width: 822px;

`
const TopDiv = styled.div`
display:flex; 
align-items:center;
justify-content:space-between;
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
const Divrow = styled.div`
display:flex;
flex-direction:column;

`
const PlusDiv = styled.div`
width: 50px;
height: 55px;
border: 1px solid rgba(31, 31, 31, 0.5);
border-radius: 5px;
display:flex;
align-items: center;
justify-content: center!important;
`

export default function PersonalDetailComponent() {
  const [phone, setPhone] = useState("")
  const [values, setValues] = React.useState({password: '',showPassword: false,});
  const [show, setShowP] = React.useState(false)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    }
  }
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Architect");
  const UserCateg= ["Seller", "Professional", "Student", "Institute", "Educationist"];
 


  const [isCityActive, setIsCityActive] = useState(false);
  const [selectedCity, setIsselectedCity] = useState("Gurugram");
  const CityNames= ["Gurugram", "New Delhi", "Noida", "Manesar", "Panipat"];
 
  const [isStateActive, setIsStateActive] = useState(false);
  const [selectedState, setIsselectedState] = useState("Haryana*");
  const StateNames= ["Haryana", "Punjab", "UP", "HIMACHAL", "RAJASTHAN"];
 

  return (
    <>
    <TopDiv>
     <Divrow>
      <BorderSpan>Personal Details</BorderSpan>
      <BorderHr/>
      </Divrow>
      <SaveBtn >SAVE</SaveBtn>
    </TopDiv>
   < ContentDiv>
   <LabelP>Contact Name*</LabelP>
    <FlexDiv>
     
    <ContactInput placeholder='First Name'/>
   <ContactInput placeholder='Last Name'/>
  
    </FlexDiv>
    <LabelP>Profession*</LabelP>
    
      <ProfessionDiv>
    <div className="dropdown-custom">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn-custom"
          >
          {selected}
          {
            isActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../dropdownarrow.svg" alt="down arrow"/>
          }   
          
        </div>
        <div
        className="dropdown-content-custom"
        style={{ display: isActive ? "block" : "none" }}
        >
        {UserCateg.map((row) => {
          return (
            <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item-custom"
            >
            {row}
          </div>
            )
          })}
        </div>
      </div>
      </ProfessionDiv>
      
    <FlexDiv>
      <FieldDiv>
      <LabelP>Working As*</LabelP>
    <WorkDropdown/>
    </FieldDiv>
    <FieldDiv>
    <LabelP>Working Since*</LabelP>
    <WorkInput />
    </FieldDiv>
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
    <LabelP>Address*</LabelP>
    <TextInput placeholder='#Flat no,Block , Street Area' />
    <FlexDiv>
     <FieldDiv>
    <WorkDropdown/>
    </FieldDiv>
    <FieldDiv>
    <div className="dropdown-custom">
        <div onClick={(e) => {setIsStateActive(!isStateActive);}}className="dropdown-btn-custom" >
          {selectedState}{isStateActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../dropdownarrow.svg" alt="down arrow"/>}
          </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isStateActive ? "block" : "none" }}
        >
        {StateNames.map((row) => {
            return (
          <div
            onClick={(e) => {
              setIsselectedState(e.target.textContent);
              setIsStateActive(!isStateActive);
            }}
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </div>
    </FieldDiv>
    </FlexDiv> 
    <FlexDiv>
      <FieldDiv>
    
      <div className="dropdown-custom">
        <div onClick={(e) => {setIsCityActive(!isCityActive);}}className="dropdown-btn-custom" >
          {selectedCity}{isCityActive ? <img src="../uparrow-icon.png"alt="up arrow"/ > : <img src="../dropdownarrow.svg" alt="down arrow"/>}
          </div>
        <div
          className="dropdown-content-custom"
          style={{ display: isCityActive ? "block" : "none" }}
        >
        {CityNames.map((row) => {
            return (
          <div
            onClick={(e) => {
              setIsselectedCity(e.target.textContent);
              setIsCityActive(!isCityActive);
            }}
            className="item-custom"
          >
            {row}
          </div>
            )
        })}
        </div>
      </div>
   

    </FieldDiv>
    <FieldDiv>
    <WorkInput />
    </FieldDiv>
    </FlexDiv> 
 
    <LabelP>Pan*</LabelP>
   <TextInput placeholder='NTYU765O'/>
    
   
    <LabelP>About you*</LabelP>
   <InputArea />
   
  </ContentDiv>
    </>
  )
}
