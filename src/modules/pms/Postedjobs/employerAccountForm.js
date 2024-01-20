import React from "react";
import { useState } from "react";
import styled from "styled-components";

import MuiPhoneNumber from "material-ui-phone-number";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
const LabelP = styled.p`
  font-family: "Inter";
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-top: 15px;
`;

const TextInput = styled.input`
  max-width: 820px;
  width: 100%;
  height: 55px;
  left: 185px;
  top: 353px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  margin-top: 11px;
`;
const InputArea = styled.input`
  max-width: 820px;
  width: 100%;
  height: 88px;
  left: 185px;
  top: 353px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  margin-top: 11px;
`;
const ProfessionDiv = styled.div`
  max-width: 820px;
  width: 100%;
  z-index: 10;
`;
const MailInput = styled.input`
  max-width: 760px;
  width: 100%;
  margin-right: 1%;
  height: 55px;
  left: 185px;
  top: 353px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
`;
const ContactInput = styled.input`
  max-width: 405px;
  width: 49%;
  height: 55px;
  left: 185px;
  top: 353px;

  border: 1px solid rgba(31, 31, 31, 0.5);
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  margin-top: 11px;
`;

const ContentDiv = styled.div`
  max-width: 822px;
`;
const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function EmployerAccountForm() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [show, setShowP] = React.useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Architect");
  const UserCateg = [
    "Seller",
    "Professional",
    "Student",
    "Institute",
    "Educationist",
  ];

  const [isTotalEmloyeActive, setIsTotalEmloyeActive] = useState(false);
  const [selectedTotalEmloye, setIsselectedTotalEmloye] = useState("10-15");
  const TotalEmloye = ["15-20", "20-25", "25-50", "50-100", "100-250"];

  return (
    <>
      <TopDiv></TopDiv>
      <ContentDiv>
      <LabelP>First Name*</LabelP>
      <FlexDiv>
        <ContactInput placeholder="First Name" />
        <ContactInput placeholder="Last Name" />
      </FlexDiv>
      <LabelP>Your Role In Hiring*</LabelP>

      <ProfessionDiv>
        <div className="dropdown-custom">
          <div
            onClick={(e) => {
              setIsActive(!isActive);
            }}
            className="dropdown-btn-custom"
          >
            {selected}
            {isActive ? (
              <img src="../uparrow-icon.png" alt="up arrow" />
            ) : (
              <img src="../dropdownarrow.svg" alt="down arrow" />
            )}
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
              );
            })}
          </div>
        </div>
      </ProfessionDiv>

      <LabelP>Company Name*</LabelP>
      <TextInput placeholder="Company Name" />
      <FlexDiv></FlexDiv>

      <LabelP>Number of Employees* *</LabelP>
      <div className="dropdown-custom">
        <div
          onClick={(e) => {
            setIsTotalEmloyeActive(!isTotalEmloyeActive);
          }}
          className="dropdown-btn-custom"
        >
          {selectedTotalEmloye}
          {isTotalEmloyeActive ? (
            <img src="../uparrow-icon.png" alt="up arrow" />
          ) : (
            <img src="../dropdownarrow.svg" alt="down arrow" />
          )}
        </div>

        <div
          className="dropdown-content-custom"
          style={{ display: isTotalEmloyeActive ? "block" : "none" }}
        >
          {TotalEmloye.map((row) => {
            return (
              <div
                onClick={(e) => {
                  setIsselectedTotalEmloye(e.target.textContent);
                  setIsTotalEmloyeActive(!isTotalEmloyeActive);
                }}
                className="item-custom"
              >
                {row}
              </div>
            );
          })}
        </div>
      </div>

      <LabelP>Company Brief*</LabelP>
      <InputArea />
    </ContentDiv>
    </>
  );
}
