// import * as React from 'react';
import React from "react";
// import 'react-tabs/style/react-tabs.css';
// import 'font-awesome/css/font-awesome.min.css';

// import Cards from "./cards"
import styled from "styled-components";

import "./PostedJobComponents.css";
import { useState } from "react";

import PostedJob from "./PostedJob";
import DraftJob from "./draftJob";
import ClosedJob from "./closedJob";
import OtherJob from "./OtherJob";
import CreateNewJobPost from "./CreateNewJobPost";

const AppliedJobTitle = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #1f1f1f;
`;
const AppliedJobTitlePara = styled.p`
  // position: absolute;
  height: 19px;
  top: 200px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
`;
const PostButton = styled.button`
  border: none;
  min-width: 148px;
`;
const DraftButton = styled.button`
  border: none;
  min-width: 148px;
`;
const ClosedButton = styled.button`
  border: none;
  min-width: 148px;
`;
const AppliedTab = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Tab = styled.div`
  height: 39px;

  background: #f5f5f5;
  border-radius: 20px;
  margin: 0 0 37px 0;
`;

export default function PostedJobComponents() {
  const [openJob, setOpenJob] = useState("tab1");
  const [openJobSave, setOpenJobSave] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const [isCreated, SetIsCreated] = useState(true);

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab3
    setActiveTab("tab3");
  };

  const handleTab4 = () => {
    // update the state to tab3
    setActiveTab("tab4");
  };

  return (
    <>
      {  
        isCreated ? 
        
        <div><CreateNewJobPost/></div> 
        
        :
        <div className="container-fluid ">
          <div className="container-main-post">
            {/* heading */}
            <div className="row pad_post">
              <div className="col-12">
                <div className="row dis-title">Posted Jobs</div>
                {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
              </div>
            </div>
            {/* heading */}

            {/* headline */}
            <div className="row">
              <div className="pms_headline"></div>
            </div>
            {/* headline */}

            <div className="row pms_sub_heading">
              View Employer Account Details
            </div>

            <div className="row">
              <button className="view-emp-btn">
                View Employer Account Details
                <span>
                  {" "}
                  <img src="icons/arrow-right.svg" alt="next" />{" "}
                </span>
              </button>
            </div>

            <div className="row">
              <AppliedTab>
                <Tab>
                  <PostButton
                    className={activeTab === "tab1" ? "active-post" : ""}
                    onClick={handleTab1}
                  >
                    Posted
                  </PostButton>
                  <DraftButton
                    className={activeTab === "tab2" ? "active-post" : ""}
                    onClick={handleTab2}
                  >
                    Drafts
                  </DraftButton>
                  <ClosedButton
                    className={activeTab === "tab3" ? "active-post" : ""}
                    onClick={handleTab3}
                  >
                    Closed
                  </ClosedButton>

                  <ClosedButton
                    className={activeTab === "tab4" ? "active-post" : ""}
                    onClick={handleTab4}
                  >
                    Other
                  </ClosedButton>
                </Tab>
              </AppliedTab>
            </div>

            {activeTab === "tab1" ? <PostedJob /> : ""}
            {activeTab === "tab2" ? <DraftJob /> : ""}
            {activeTab === "tab3" ? <ClosedJob /> : ""}
            {activeTab === "tab4" ? <OtherJob /> : ""}
          </div>
          <div></div>
        </div>
      }
    </>
  );
}
