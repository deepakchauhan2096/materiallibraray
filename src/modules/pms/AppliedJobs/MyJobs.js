import React, { useState } from 'react'
import styled from "styled-components";
import "./MyJob.css";
import Table from "./table"
import AppliedJobs from "./savedJob"

const AppliedJobTitle = styled.div`
    height: 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;

    color: #1F1F1F;
`
const AppliedJobTitlePara = styled.p`
    // position: absolute;
    height: 19px;
    top: 200px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1F1F1F;
`
const AppliedTab = styled.div`
`
const TabButton = styled.button`

`
const SaveButton = styled.button`
`
const Tab = styled.div`
width: 294px;
height: 39px;
left: 455px;
top: 283px;

background: #F5F5F5;
border-radius: 20px;
margin: 0 0 37px 0;
`
export default function MyJobs() {
    const [openJob, setOpenJob] = useState("tab1");
    const [openJobSave, setOpenJobSave] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");

  const openHandle = () => {
    setOpenJob(!openJob)

  }
  const openSaveHandle = () => {
    setOpenJobSave(!openJobSave)
    setOpenJob(false)
  }
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
      <>
       <div>
         <AppliedJobTitle>My Jobs
         </AppliedJobTitle>
         <div className='Underline-Ml'></div>
         <AppliedJobTitlePara>View all your applied and saved jobs here.
         </AppliedJobTitlePara>
         <AppliedTab>
         <Tab>
         <TabButton className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Applied</TabButton>
         <SaveButton className={activeTab === "tab2" ? "active" : ""}  onClick={handleTab2}>Saved</SaveButton>
         </Tab>
         </AppliedTab>
        {activeTab === "tab1" ?  <Table/> : <AppliedJobs/>}
       </div>
    </>
  )
}
