import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CourceForm from "./courceForm";
import BranchUpload from "../../../vms/shared/branch/branchUoload";
import {Link} from "react-router-dom"

import "../../../vms/shared/branch/branch.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const AccordionBox = styled(Accordion)`
box-shadow:none !important;
width:100%;
`;


const AccordionSummaryBox = styled(AccordionSummary)`

height:96px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;

@media only screen and (max-width:1366px){
  height:66px !important;

}


`;


const AccordionDetailsBox = styled(AccordionDetails)`
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-top:0px;
border-radius:10px;
border-top-left-radius:0px;
border-top-right-radius:0px;
`;


export default function AccordianData() {
    const [expanded, setExpanded] = React.useState(false);
  
    
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:"30px"}}>
            <div style={{display:"flex",flexDirection:"column",color:"#1F1F1F",fontSize:"18px",fontWeight:"700"}}><div>Program, Specialization</div>
            {/* <div style={{fontSize:"14px",color:"#1F1F1F",fontWeight:"500"}}>Employment Type </div> */}
            <div style={{fontSize:"14px",color:"#1F1F1F",fontWeight:"500"}}>Online, MM/YYYY-MM/YYYY</div>
            <span style={{fontSize:"14px",color:"#1F1F1F",fontWeight:"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean auctor, odio eu cursus egestas, purus sapien vestibulum eros, fermentum condimentum dui nunc eu mi. Morbi varius blandit faucibus.</span></div>
            <div>
                <div style={{display: "flex"}}>
                <EditIcon style={{marginLeft:8}} onClick={()=>setExpanded(!expanded)} />
                <DeleteIcon />
                </div>
        </div>
        </div>
        {
            expanded?
            <CourceForm/>
            :
            null
        }

  

                   
              
        
    </div>
  )
}
