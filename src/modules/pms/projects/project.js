// import * as React from 'react';
import React from "react";
// import 'react-tabs/style/react-tabs.css';
// import 'font-awesome/css/font-awesome.min.css';
import ProjectMain from "./ProjectMain"
import styled from "styled-components";
import { useState } from "react";
import "./project.css";
import "./projectcard.css"
import "./projectmodel.css"
import ProjectPortfolio from "./ProjectPortfolio";




const PostButton = styled.button`
  border: none;
  background:none;
  min-width: 140px;
`;
const DraftButton = styled.button`
  border: none;
  background:none;
  min-width: 140px;
`;
const ClosedButton = styled.button`
  border: none;
  background:none;
  min-width: 206px;
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


export default function Project() {

  const [activeTab, setActiveTab] = useState("tab1");

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
    <div className="container-fluid dis-container">
      <div className="container-main-pms">
        {/* heading */}
        <div className="row pad_pms">
          <div className="col-12">
            <div className="row dis-title">Project</div>
            {/* <div className="row dis-dis">Please input requested details below. Click submit once you are done</div> */}
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="pms_headline"></div></div>
        {/* headline */}

        <div className="row pms_sub_heading">Display your projects and portfolios</div>

        <div className="row">
          <form className="">
            <input className="nosubmit_pms" type="search" placeholder="Search" />
          </form>
        </div>


        <div className='row'>
        <div className="col-8 pl-0">
        <AppliedTab>
            <Tab>
              <PostButton
                className={activeTab === "tab1" ? "active-post" : ""}
                onClick={handleTab1}
              >
                Projects
              </PostButton>
              <DraftButton
                className={activeTab === "tab2" ? "active-post" : ""}
                onClick={handleTab2}
              >
                Portfolios
              </DraftButton>
              <ClosedButton
                className={activeTab === "tab3" ? "active-post" : ""}
                onClick={handleTab3}
              >
                Thesis & Dissertations
              </ClosedButton>
            </Tab>
        </AppliedTab>
        </div>
        <div className="col-4 pad_pms">
              <b className="float-right">Total 50</b>
        </div>
        </div>

        <div className="row">
          {activeTab === "tab1" ? <ProjectMain/> : ""}
          {activeTab === "tab2" ? <ProjectPortfolio/> : ""}
        </div>
      </div>

    </div>
  )
}
