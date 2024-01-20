import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import "./distribution.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DisForm from "./disForm";
import DisUpload from "./disUpload";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';


//


const AccordionBox = styled(Accordion)`
box-shadow:none !important;
margin: 10 auto !importa;
`;


const AccordionSummaryBox  = styled(AccordionSummary)`
height:96px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
`;


const AccordionDetailsBox  = styled(AccordionDetails)`
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-top:0px;
border-radius:10px;
border-top-left-radius:0px;
border-top-right-radius:0px;
`;


export default function Distribution() {
 

  const [expanded, setExpanded] = React.useState('panel2');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log(expanded);

  

  return (
    <>
     <Container maxWidth="">
      <div className="container-main-box">
        <div className="display-flex bottom-line-heading">
          <div style={{ display: "flex", justifyContent: "space-between" }} className='row position-relative' >
            <div className="div-branch-dis">
              <p className="branch-deatils-dis">Distribution Network</p>
              <p className="sub-branch">Please input requested details below. Click submit once you are done</p>
            </div>
            <div>
              <button className="submit-button">
              <Link style={{ color: "orange" }} to="distributionData" >Submit</Link></button>
            </div>
          </div>
        </div>


        <div className='accodin-field1'>
          <AccordionBox expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummaryBox
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="font-left-nodisplay accordin-heading">
                <Typography sx={{ width: '80%', flexShrink: 0 }} className='accordin-title-main'>Have many Branches?</Typography>
                <Typography sx={{ color: 'text.secondary' }} className='accordin-title-child'>Download our CSV file and input all your branch details in just minutes</Typography>
              </div>
            </AccordionSummaryBox>
            <AccordionDetailsBox className='container-fluid' >
              <Typography>
                <DisUpload />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
        {/* dashesline */}
        <div>
          <p className="orline"><span>or</span></p>
        </div>


        {/* form-field */}
        <div className='accodin-field2'>
          <AccordionBox expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
            <AccordionSummaryBox
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <div className="font-left-nodisplay accordin-heading">
                <Typography sx={{ width: '80%', flexShrink: 0 }} className='accordin-title-main'>One At A Time</Typography>
                <Typography sx={{ color: 'text.secondary' }} className='accordin-title-child'>
                  Have only one or few branches, use this option.
                </Typography>
              </div>
            </AccordionSummaryBox>
            <AccordionDetailsBox className='container-fluid'>
              <Typography>
                <DisForm />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
      </div>
      </Container>
    </>
  );
}
