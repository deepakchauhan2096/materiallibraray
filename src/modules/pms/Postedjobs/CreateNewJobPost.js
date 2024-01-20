import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import TextEditor from "./TextEditorComponent";

const MainContainer = styled.div`
  margin: 60px 100px 138px 40px;
`;

const HeadingConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  padding-bottom: 20px;
  border-bottom: 3px solid #f24f17;

  color: #1f1f1f;
`;

const ButtonContainer = styled.div``;

const SaveBtn = styled(Button)`
  background: #ffffff;
  width: 150px;
  height: 50px;

  border: 2px solid #f24f17 !important;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #f24f17 !important;
`;

const PostButton = styled(Button)`
  background: #f24f17 !important;
  width: 150px;
  height: 50px;
  margin-left: 20px !important;

  border: 2px solid #f24f17 !important;
  border-radius: 5px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff !important;
`;

const HeadingPara = styled.div`
  margin-top: 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #1f1f1f;
`;

const BackIcon = styled.div`
  margin-top: 30px;
`;

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
  z-index: 100;
`;

const JobLocationDiv = styled.div`
  max-width: 820px;
  width: 100%;
  zindex: 1;
`;

const WorkSpaceTypeDiv = styled.div`
  max-width: 820px;
  width: 100%;
  zindex: 1;
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

const CreateNewJobPost = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [show, setShowP] = React.useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("InternShip");
  const UserCateg = ["Full-Time", "Part-time", "Work From Home", "Hourly"];

  const [isJobLocationActive, setIsJobLocationActive] = useState(false);
  const [selectedJobLocation, setIsselectedJobLocation] = useState("Gurugram");
  const JobLocation = ["Gurugram", "Faridabad", "Delhi", "Noida", "Palwal"];

  const [isWorkSpaceTypeActive, setIsWorkSpaceTypeActive] = useState(false);
  const [selectedWorkSpaceType, setIsselectedWorkSpaceType] =
    useState("Gurugram");
  const WorkSpaceType = ["Full-Time", "Part-time", "Work From Home", "Hourly"];

  const [isTotalEmloyeActive, setIsTotalEmloyeActive] = useState(false);
  const [selectedTotalEmloye, setIsselectedTotalEmloye] = useState("10-20");
  const TotalEmloye = ["15-20", "20-25", "25-50", "50-100", "100-250"];

  return (
    <>
      <MainContainer>
        <HeadingConatiner>
          <Heading>Create New Job Post</Heading>

          <ButtonContainer>
            <SaveBtn>Save</SaveBtn>
            <PostButton>Post</PostButton>
          </ButtonContainer>
        </HeadingConatiner>
        <HeadingPara>View all your posted jobs here</HeadingPara>
        <BackIcon>
          <img src="icons/back-Icon.svg" alt="back" />
        </BackIcon>

        <ContentDiv>
          <LabelP>Job Title*</LabelP>
          <TextInput placeholder="Interior design" />
          <LabelP>Employment Type*</LabelP>
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
          <LabelP>Job Location*</LabelP>
          <JobLocationDiv>
            <div className="dropdown-custom">
              <div
                onClick={(e) => {
                  setIsJobLocationActive(!isJobLocationActive);
                }}
                className="dropdown-btn-custom"
              >
                {selectedJobLocation}
                {isJobLocationActive ? (
                  <img src="../uparrow-icon.png" alt="up arrow" />
                ) : (
                  <img src="../dropdownarrow.svg" alt="down arrow" />
                )}
              </div>

              <div
                className="dropdown-content-custom"
                style={{ display: isJobLocationActive ? "block" : "none" }}
              >
                {JobLocation.map((row) => {
                  return (
                    <div
                      onClick={(e) => {
                        setIsselectedJobLocation(e.target.textContent);
                        setIsJobLocationActive(!isJobLocationActive);
                      }}
                      className="item-custom"
                    >
                      {row}
                    </div>
                  );
                })}
              </div>
            </div>
          </JobLocationDiv>
          <LabelP>Workplace Type*</LabelP>
          <WorkSpaceTypeDiv>
            <div className="dropdown-custom">
              <div
                onClick={(e) => {
                  setIsWorkSpaceTypeActive(!isWorkSpaceTypeActive);
                }}
                className="dropdown-btn-custom"
              >
                {selectedWorkSpaceType}
                {isWorkSpaceTypeActive ? (
                  <img src="../uparrow-icon.png" alt="up arrow" />
                ) : (
                  <img src="../dropdownarrow.svg" alt="down arrow" />
                )}
              </div>

              <div
                className="dropdown-content-custom"
                style={{ display: isWorkSpaceTypeActive ? "block" : "none" }}
              >
                {WorkSpaceType.map((row) => {
                  return (
                    <div
                      onClick={(e) => {
                        setIsselectedWorkSpaceType(e.target.textContent);
                        setIsWorkSpaceTypeActive(!isWorkSpaceTypeActive);
                      }}
                      className="item-custom"
                    >
                      {row}
                    </div>
                  );
                })}
              </div>
            </div>
          </WorkSpaceTypeDiv>
          sapce for salary check box
          <LabelP>Number of Vacancies*</LabelP>
          <TextInput placeholder="2" />
          <LabelP>Apply Before*</LabelP>
          <TextInput placeholder="2" />
        
          <LabelP>Job Description*</LabelP>
        
          <TextEditor />
        
          <LabelP>Add Skill*</LabelP>
          <LabelP>First Name*</LabelP>
          <FlexDiv>
            <ContactInput placeholder="First Name" />
            <ContactInput placeholder="Last Name" />
          </FlexDiv>
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
      </MainContainer>
    </>
  );
};

export default CreateNewJobPost;
