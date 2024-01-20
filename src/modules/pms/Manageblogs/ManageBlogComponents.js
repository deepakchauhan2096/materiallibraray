import React, { useState } from "react";
import styled from "styled-components";
import Posted from "./Posted";
import Drafts from "./Drafts";
import NotAccepted from "./NotAccepted";

const ManageBlogTitle = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #1f1f1f;
`;
const ManageBlogTitlePara = styled.p`
  // position: absolute;
  height: 19px;
  top: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin: 30px 0px 31px 0px;
  color: #1f1f1f;
`;

const ManageBlogSearch = styled.input`
  border: none;
  width: 250px;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 2px;
  margin-bottom: 30px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: black !important;
  }
  :-ms-input-placeholder {
    color: black !important;
  }
`;
const ManageTab = styled.div``;
const PostedButton = styled.button`
  width: 144px;
  border: none;
`;
const DraftsButton = styled.button`
  width: 144px;
  border: none;
`;

const NotAcceptedButton = styled.button`
  width: 144px;
  border: none;
`;

const Tab = styled.div`
  width: 441px;
  height: 39px;
  left: 455px;
  top: 283px;

  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;

export default function ManageBlogComponents() {
  const [openBlog, setOpenBlog] = useState("tab1");
  const [openBlogSave, setOpenBlogSave] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const openHandle = () => {
    setOpenBlog(!openBlog);
  };
  const openSaveHandle = () => {
    setOpenBlogSave(!openBlogSave);
    setOpenBlog(false);
  };
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };

  return (
    <>
      <div className="container-fluid contact-container">
        <ManageBlogTitle>My Jobs</ManageBlogTitle>
        <div className="Underline-Ml"></div>
        <ManageBlogTitlePara>
          View all your applied and saved jobs here.
        </ManageBlogTitlePara>
        <div className="d-flex justify-content-between">
          <ManageBlogSearch type="search" placeholder="Search" />
          <p>Total 50</p>
        </div>
        <ManageTab>
          <Tab>
            <PostedButton
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              Posted
            </PostedButton>
            <DraftsButton
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Drafts
            </DraftsButton>
            <NotAcceptedButton
              className={activeTab === "tab3" ? "active" : ""}
              onClick={handleTab3}
            >
              NotAccepted
            </NotAcceptedButton>
          </Tab>
        </ManageTab>
        {activeTab === "tab1" ? (
          <Posted />
        ) : activeTab === "tab2" ? (
          <Drafts />
        ) : (
          <NotAccepted />
        )}
      </div>
    </>
  );
}
