import React from "react";
import { useState } from "react";
import styled from "styled-components";
import "./basic.css";
// import WorkDropdown from './WorkDropdown';
import MuiPhoneNumber from "material-ui-phone-number";

const BasicDetailsForm = styled.div``;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 100px 34px 100px;
`;

const BasicForm = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 20%;
`;

const LogoImg = styled.img``;

const LogOut = styled.button`
  background-color: transparent;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #f24f17;
`;

const TopHead = styled.div``;

const FormContent = styled.div`
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 1350px;
`;

export default function PersonalDetailComponent() {
//   const [phone, setPhone] = useState("");
//   const [values, setValues] = React.useState({
//     password: "",
//     showPassword: false,
//   });
//   const [show, setShowP] = React.useState(false);
//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handlePhoneChange = (phone) => {
//     if (phone) {
//       setPhone(phone);
//     }
//   };
//   const [isActive, setIsActive] = useState(false);
//   const [selected, setIsSelected] = useState("Architect");
//   const UserCateg = [
//     "Seller",
//     "Professional",
//     "Student",
//     "Institute",
//     "Educationist",
//   ];

//   const [isCityActive, setIsCityActive] = useState(false);
//   const [selectedCity, setIsselectedCity] = useState("Gurugram");
//   const CityNames = ["Gurugram", "New Delhi", "Noida", "Manesar", "Panipat"];

//   const [isStateActive, setIsStateActive] = useState(false);
//   const [selectedState, setIsselectedState] = useState("Haryana*");
//   const StateNames = ["Haryana", "Punjab", "UP", "HIMACHAL", "RAJASTHAN"];

  return (
    <>
      <BasicDetailsForm className="">
        <TopDiv>
          <LogoImg src="../images/ml-icon.svg" alt="logo-ml"></LogoImg>
          <LogOut>Logout</LogOut>
        </TopDiv>
        <BasicForm>
            <FormContainer>
                    <TopHead className="tophead text-center">
                        <h1>Basic Company Details</h1>
                        <p>Please enter your company details</p>
                    </TopHead>

                    <FormContent>
                        <div className="basic-content">
                            <h2>Company Name*</h2>
                            <input
                                type="text"
                                name="company name"
                                placeholder="Tata Steel"
                                className="form-control col-md-12"
                            />
                        </div>
                        <div className="basic-content">
                            <h2>Registered Address*</h2>
                            <input
                                type="text"
                                name="address"
                                placeholder="Unit, Street Address, Block Address, Area Address"
                                className="form-control col-md-12"
                            />
                        </div>
                        <div className="basic-location">
                            <div className="basic-content w-25 mr-4">
                                <h2>Country*</h2>
                                <input type="text" placeholder="India" className="form-control col-md-12"/>
                            </div>
                            <div className="basic-content w-25 mr-4">
                                <h2>State*</h2>
                                <input type="text" placeholder="Haryana" className="form-control col-md-12"/>
                            </div>
                            <div className="basic-content w-25 mr-4">
                                <h2>City*</h2>
                                <input type="text" placeholder="Gurugram" className="form-control col-md-12"/>
                            </div>
                            <div className="basic-content w-25">
                                <h2>Pincode*</h2>
                                <input type="text" placeholder="123456" className="form-control col-md-12"/>
                            </div>
                        </div>
                        <div className="basic-gst w-100">
                            <div className="basic-content w-50 mr-4">
                                <h2>GSTIN Status</h2>
                                <input type="text" placeholder="I have a GSTIN" className="form-control col-md-12"/>
                            
                            </div>
                            <div className="d-flex w-50">
                                <div className="basic-content w-50 mr-4">
                                    <h2>GSTIN Status</h2>
                                    <input type="text" placeholder="I have a GSTIN" className="form-control col-md-12"/>
                                
                                </div>
                                <div className="basic-content w-50">
                                    <h2>GSTIN Status</h2>
                                    <input type="text" placeholder="I have a GSTIN" className="form-control col-md-12"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 w-100">
                            <button className="basic-continue p-3 col-md-8">CONTINUE</button>
                        </div>
                    </FormContent>
            </FormContainer>
        </BasicForm>
      </BasicDetailsForm>
    </>
  );
}

// import React from 'react';
// import styled from "styled-components";
// import "./basic.css"
// // import CountrySelector from './CountrySelector';

// const LogoNav = styled.div`
//     display: flex;
//     justify-content: space-between;
//     padding: 26px 100px 34px 100px;
//     border: 1px solid rgba(31, 31, 31, 0.1);
// `;

// const BasicDetailsComponent = styled.div`
//     ${'' /* max-width: 1250px; */}
// `;

// const BasicForm = styled.div`
//     max-width: 1250px !important;
// `;

// const BasicCompanyDetails = () => {
//   return (
//     <>
//         <div>
//             <LogoNav>
//                 <img src="../images/ml-icon.svg" alt="logo" />
//                 <button className='basicdetails-logout'>Logout</button>
//             </LogoNav>
//             <BasicDetailsComponent>
//                 <div className='d-flex justify-content-center'>
//                     <BasicForm className='container py-5 h-100 '>
//                     <div className="basic-head">
//                         <h1>Basic Company Details</h1>
//                         <p>Please enter your company details</p>
//                     </div>
//                     <div className='w-100'>
//                         <div className='basic-name'>
//                             <h2>Company Name *</h2>
//                             <input type="text"  placeholder='Tata Steel' className='form-control col w-100'/>
//                         </div>
//                         <div className='basic-name'>
//                             <h2>Registered Address *</h2>
//                             <input type="text" placeholder='Unit, Street Address, Block Address, Area Address' className='form-control col w-100'/>
//                         </div>
//                         <div className='d-flex'>
//                             <div className='basic-name'>
//                                 <h2>Country *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>State *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>City *</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='basic-name'>
//                                 <h2>Pincode *</h2>
//                                 <input type="text" placeholder='123456'/>
//                             </div>
//                         </div>

//                         <div>
//                             <div className='b'>
//                                 <h2>GSTIN Status</h2>
//                                 <select name="country" id='country' className='col-md-4'>
//                                     <option value="India" className=''>India</option>
//                                 </select>
//                             </div>
//                             <div className='c'>
//                                 <h2>GSTIN*</h2>
//                                 <input type="text" placeholder='29ABCDE1234F2Z5' />
//                             </div>
//                             <div className='d'>
//                                 <h2>PAN*(Permanent Account Number)</h2>
//                                 <input type="text" placeholder='AAAAA1234A' />
//                             </div>
//                         </div>

//                     </div>
//                     </BasicForm>
//                 </div>
//             </BasicDetailsComponent>
//         </div>
//     </>
//   )
// }

// export default BasicCompanyDetails
