import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DisForm from "./disForm";
import DisUpload from "./disUpload";
import { Link } from "react-router-dom";
// import Container from '@mui/material/Container';


//


const AccordionBox = styled(Accordion)`
box-shadow:none !important;
width:100%;
`;


const AccordionSummaryBox = styled(AccordionSummary)`
height:94px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;

@media only screen and (max-width:1536px) {
height:65px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
}

@media only screen and (max-width:1366px) {
height:66px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
}

@media only screen and (max-width:928px) {
height:84px;
box-shadow:none !important;
border:0.5px solid #1F1F1F80;
border-radius:10px;
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


export default function Distribution() {


  const [expanded, setExpanded] = React.useState('panel2');
  const [changeBackground, setChangeBackground] = React.useState('panel2')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setChangeBackground(isExpanded ? panel : false)
  };



  return (
    <>
      <div className="container-fluid dis-container">
        {/* heading */}
        <div className="row pad">
          <div className="col-8">
            <div className="row dis-title">Distribution Network</div>
            <div className="row dis-dis">Please input requested details below. Click submit once you are done</div>
          </div>
          <div className="col-4 pr-0">
            <button type="button" className="submit-top-button float-right"><Link to="distributionData">Submit</Link> </button>
          </div>
        </div>
        {/* heading */}

        {/* headline */}
        <div className="row"><div className="headline"></div></div>
        {/* headline */}



        {/* accordian */}
        <div className="row pad">
          <AccordionBox expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
            <AccordionSummaryBox
              style={changeBackground === "panel1" ? { backgroundColor: "#F4F4F4", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } : { backgroundColor: "white" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="typo-heading">Have many Branches?</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="typo-dis">Download our CSV file and input all your branch details in just minutes</Typography>
              </div>
            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                <DisUpload />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>

        {/* accordian */}

        {/* orline */}
        <div className="row">
          <p className="orline"><span className="orline-text">or</span></p>
        </div>
        {/* orline */}

        {/* accordian */}
        <div className="row pad">
          <AccordionBox expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
            <AccordionSummaryBox
              style={changeBackground === "panel2" ? { backgroundColor: "#F4F4F4", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } : { backgroundColor: "white" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            > <div className="col">
                <Typography sx={{ width: '100%', flexShrink: 0 }} className="typo-heading">One At A Time</Typography>
                <Typography sx={{ color: 'text.secondary' }} className="typo-dis">
                  Have only one or few branches, use this option.
                </Typography>
              </div>

            </AccordionSummaryBox>
            <AccordionDetailsBox >
              <Typography>
                <DisForm />
              </Typography>
            </AccordionDetailsBox>
          </AccordionBox>
        </div>
        {/* accordian */}
      </div>
    </>
  );
}
