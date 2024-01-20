import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import BranchForm from "./branchForm";
import BranchUpload from "./branchUoload";
import {Link} from "react-router-dom"

import "./branch.css"




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


export default function Branch() {


  const [expanded, setExpanded] = React.useState('panel2');
  const [changeBackground , setChangeBackground] = React.useState('panel2')


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setChangeBackground(isExpanded ? panel : false)
   
  };

  console.log(expanded);

  


  return (
    <>
      <div className="container-fluid b-container">
        <div className="row b-pad b-headline">
          <div className="col-md-8">
            <div className="row b-title">Branch Details</div>
            <div className="row b-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-md-4 pr-0">
       <Link to="/branchtable" ><button type="button" className=" b-submit-top-button float-right">Submit</button> </Link>
          </div>
        </div>
        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummaryBox
              style={ changeBackground === "panel1" ? { backgroundColor:"#F4F4F4" , borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon />}
             
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">Have many Branches?</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">Download our CSV file and input all your branch details in just minutes</Typography>
              </div>
            </AccordionSummaryBox>
            <AccordionDetailsBox  >
              <Typography>
                  <BranchUpload/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
        <div className="row">
            <p className="b-orline"><span className="b-orline-text">or</span></p>
        </div>
        <div className="row b-pad">
          <AccordionBox expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
            <AccordionSummaryBox
            style={ changeBackground === "panel2" ? {backgroundColor:"#F4F4F4",borderBottomLeftRadius:"0px" ,borderBottomRightRadius:"0px"} : {backgroundColor:"white"}}
              expandIcon={<ExpandMoreIcon   />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="b-typo-heading">One At A Time</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="b-typo-dis">
                  Have only one or few branches, use this option.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                    <BranchForm/>
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
      </div>
    </>
  );
}
