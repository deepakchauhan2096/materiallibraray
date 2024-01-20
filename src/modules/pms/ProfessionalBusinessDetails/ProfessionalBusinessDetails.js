import React from "react";
import styled from "styled-components";
import "../../../assets/styles/custom.css";

const MainContainer = styled.div``;
const LabelText = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #1f1f1f;
  margin-top: 40px;
`;
const SaveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 92%;
`;
const Button = styled.button`
  background: #ffffff;
  border: 2px solid #f24f17;
  border-radius: 5px;
  padding: 13px 48px 13px 49px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #f24f17;
`;
const Span = styled.span`
  width: 100px;
  height: 0px;
  outline: 3px solid #f24f17;
`;
const InputFields = styled.div``;
const Contanier = styled.div`
  margin-bottom: 30px;
`;
const Name = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
  margin-bottom: 10px;
`;
const InputField = styled.input`
  box-sizing: border-box;
  width: 820px;
  height: 50px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  padding-left: 20px;
  line-height: 23px;
`;
const SelectField = styled.select`
  box-sizing: border-box;
  width: 820px;
  height: 50px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  padding-left: 20px;
`;
const OptionField = styled.option`
  color: #1f1f1f;
  opacity: 0.3;
`;
const TextArea = styled.textarea`
  max-height: 8rem;
  min-height: 6.7rem;
  width: 820px;
  resize: none;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
`;
const RegisteredContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 10px;
  width: 820px;
  column-gap: 10px;
  margin-top: 10px;
`;
const RegisteredSelect = styled.select`
  box-sizing: border-box;
  width: 405px;
  height: 50px;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  padding-left: 20px;
`;
const RegisteredInput = styled.input`
  box-sizing: border-box;
  width: 405px;
  height: 50px;
  background: #ffffff;
  border: 1px solid rgba(31, 31, 31, 0.5);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  padding-left: 20px;
`;

const ProfessionalBusinessDetails = () => {
  return (
    <MainContainer>
      <LabelText>Business Details</LabelText>

      <SaveButton>
        <Span></Span>
        <Button>Save</Button>
      </SaveButton>

      <InputFields>
        <Contanier>
          <Name>Company Name*</Name>
          <InputField
            className="Input-Text"
            placeholder="Material Library"
            placeholderTextColor="green"
          ></InputField>
        </Contanier>

        <Contanier>
          <Name>Company Type*</Name>
          <SelectField>
            <OptionField>Architect</OptionField>
          </SelectField>
        </Contanier>

        <Contanier>
          <Name>Company Description*</Name>
          <TextArea className="Input-Text"></TextArea>
        </Contanier>

        <Contanier>
          <Name>Company Structure*</Name>
          <SelectField>
            <OptionField>LLP</OptionField>
          </SelectField>
        </Contanier>

        <Contanier>
          <Name>Company Website Link*</Name>
          <InputField
            className="Input-Text"
            placeholder="www.materiallibrary.com"
          ></InputField>
        </Contanier>

        <Contanier>
          <Name>Established On*</Name>
          <SelectField>
            <OptionField>2001</OptionField>
          </SelectField>
        </Contanier>

        <Contanier>
          <Name>Company Mobile Number*</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>

        <Contanier>
          <Name>Company Email ID*</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>

        <Contanier>
          <Name>Registred Address*</Name>
          <InputField
            className="Input-Text"
            placeholder="#Flat No, Block, Street, Area "
          ></InputField>

          <RegisteredContainer>
            <RegisteredSelect>
              <OptionField>Country</OptionField>
            </RegisteredSelect>
            <RegisteredSelect>
              <OptionField>Haryana</OptionField>
            </RegisteredSelect>
            <RegisteredSelect>
              <OptionField>Gurugram</OptionField>
            </RegisteredSelect>
            <RegisteredInput
              className="Input-Text"
              placeholder="123456"
            ></RegisteredInput>
          </RegisteredContainer>
        </Contanier>

        <Contanier>
          <Name>GST IN*</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>

        <Contanier>
          <Name>PAN*</Name>
          <InputField className="Input-Text"></InputField>
        </Contanier>
      </InputFields>
    </MainContainer>
  );
};

export default ProfessionalBusinessDetails;
