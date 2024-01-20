import React from "react";
import BranchEditModal from "./branchEditmodal";
import BranchUploadModal from "./branchUploadModal";

const BranchTable = () => {
  return (
    <>
      <BranchEditModal 
           modalName="Edit Branch Name" 
           heading="Edit Branch Details" 
     
           />
      <BranchEditModal modalName="Add branch Name" heading="Add new Branch" haveMany="Have Many Branch"/>
      <BranchUploadModal  />
    </>
  );
};

export default BranchTable;
