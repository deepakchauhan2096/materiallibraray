
import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row } from "simple-flexbox";
import OTPModal from "../../common/components/OTP/OTPModal";
import MuiPhoneNumber from 'material-ui-phone-number';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CustomDropdown from "../signIn/Dropdown";


const SignUpDiv = styled.div`
  display: contents;
  ${'' /* width: 1152px; */}
  width: 901px;
  height: 100%;
  background: #FFFFFF;
`;

const LogoNav = styled.div`
  padding: 30px 0px 22px 100px;
  @media screen and (max-width: 768px) {
      padding-left: 54px;
      img {
        width: 108px;
      }
  }
`;


const ImageDiv = styled.div`
width: 100%;
height: 100%;

background: #E9E9E9;
`
const NameDiv = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  color: #1F1F1F;
  @media screen and (max-width: 768px) {
      font-size: 35px;
  }
`;

const TitleDiv= styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 80px;
  @media screen and (max-width: 768px) {
      font-size: 10px;
      padding-bottom: 40px;
  }
`;
const EmailDiv = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1F1F1F;
  @media screen and (max-width: 768px) {
      font-size: 12px;
      margin-bottom: 5px;
  }
`;
const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  left: 185px;
  top: 353px;
  background: #FFFFFF;
  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: black !important;
    opacity: 0.8;
    margin-left: 10px;
  }
  :-ms-input-placeholder {
     color: black !important;
  }
  @media screen and (max-width: 768px) {
      height: 45px;
  }
`;
const PhoneDiv = styled.div`
  display:flex;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
  }
`;
const PhnDiv = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1F1F1F;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;
const PhnInput = styled(MuiPhoneNumber)`
    background: #FFFFFF !important;
    border: 1px solid rgba(31, 31, 31, 0.5) !important;
    box-sizing: border-box !important;
    border-radius: 5px !important;
    width: 100%;
    height: 55px;
    @media screen and (max-width: 768px) {
      height: 45px;
  }
    
`;

const MarginDiv = styled.div`
  width:100%;
  margin-right:20px;

`;
const UserDiv = styled.div`
  width:100%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
const PassDiv = styled.div`
  width: 100%;
  padding-right: 20px;
    @media screen and (max-width: 768px) {
    padding-right: 0px;
  }
`;

const ConfirmDiv = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;



const RemeberDiv= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

    const Inputbox = styled.input`
    background: #FFFFFF;
    border: 1px solid #1F1F1F;
    box-sizing: border-box;
    border-radius: 2px;
    width:30px;
    height:30px;
    margin-right:15px;
    @media screen and (max-width: 768px) {
      width: 15px;
      height:15px;
      }
    `;

const RemeberPara = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1F1F1F;
  margin-bottom:0px !important;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const RemeberDivPri= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 13px;`

const BtnContinue = styled.button`
  width: 100%;
  height: 50px;
  left: 185px;
  top: 897px;
  background: #101010;
  border-radius: 5px;
  color: white;
  margin-top:30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
    const LastDiv = styled.div`
    text-align-last: center;
    margin-top: 30px;`

    const SignPara = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #1F1F1F;
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
    `;

const ButtonSign = styled.button`
color: #F24F17;
background-color: transparent;
border: none;
`
const ImgSrc = styled.img`
width: 100%;
    height: 100%;`



 
export default function SignUpComponent(props) {
  const [otpModalOpen, setOtpModalOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [values, setValues] = React.useState({password: '',showPassword: false,});
  const [show, setShowP] = React.useState(false)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const handleEmailOpen = (event) => {
    event.preventDefault();  
    setOtpModalOpen(true)
};
//   const handleEmailClose = (event) => {
//     event.preventDefault();
//     setfirst(false);
// };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const changeIcon = () => {
    setShowP(!show)
  } 

const handleModalChange = () => {
  setOtpModalOpen(!otpModalOpen)
}


  function handleBlur(e) {
    console.log(e);
  }
  
  const handlePhoneChange =(phone) => {
    if (phone) {
      setPhone(phone);
    } 
  }
  
  return (
    <>
    <div>
      <LogoNav className='logonav'>
        <img src="../images/ml-icon.svg" alt="logo" />
      </LogoNav>
        <SignUpDiv>
          <div className='container-sm col-md-8 signup-cont'>
            <NameDiv>Sign Up</NameDiv>
            <TitleDiv>Join our community now. Please enter your details below. </TitleDiv>
            <EmailDiv>Email*</EmailDiv>
            <EmailInput placeholder='fullname@gmail.com'></EmailInput>
            <PhoneDiv>
              <MarginDiv>
              <PhnDiv>Phone*</PhnDiv>
              <PhnInput
                    name="phone"
                    data-cy="user-phone"
                    defaultCountry={"in"}
                    value={phone}
                    
                    onChange={handlePhoneChange}
                    className="phn-input"
                  />
                  </MarginDiv>
                  <UserDiv>
                    <PhnDiv>User Role*</PhnDiv>
                    <CustomDropdown/>
                  </UserDiv>
            </PhoneDiv>
            <PhoneDiv>
              <PassDiv>
              <PhnDiv>Choose Password*</PhnDiv>
              <OutlinedInput
              className='password-out'
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            
          />
                  </PassDiv>
                  <ConfirmDiv>
            <PhnDiv>Confirm Password*</PhnDiv>
            <input id="password-field" type={show ? "text" : "password"} className="form-control" name="password"  />
              <span toggle="#password-field" className="field-icon toggle-password" onClick={changeIcon}>{show ? <Visibility /> : <VisibilityOff />}</span>
                  
                  </ConfirmDiv>
            </PhoneDiv>
          <div><p className='valid-msg'>Min 8 characters. Atleast one capital & one small letter, one numeric, and one special character. Eg: Ab123@567</p></div>
          <RemeberDiv>
            <Inputbox type="checkbox"/>
            <RemeberPara>Remember Me</RemeberPara>
          </RemeberDiv>
          <RemeberDivPri>
            <Inputbox type="checkbox"/>
            <RemeberPara>I agree all Terms & Conditions and our Privacy Policy</RemeberPara>
          </RemeberDivPri>
          <div><BtnContinue onClick={handleModalChange}>CONTINUE</BtnContinue></div>
          <LastDiv><SignPara>Already have an account? <ButtonSign>SignIn</ButtonSign> </SignPara></LastDiv>
          </div>
        </SignUpDiv>
      </div>
      {otpModalOpen && (
        <OTPModal open={otpModalOpen} handleModalChange={handleModalChange} verifyPara="Please verify your phone number"/> )
      }
    </>
  )
}



// {<OTPModal continueButton="Continue" verifyPara="Please verify your phone number"/>}