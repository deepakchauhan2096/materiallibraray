import React,{ useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "material-ui/Divider";
import ContactForm from "./ContactForm"
import "./Contact.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ContactBox = styled(Box)`
  ${'' /* margin-top: 39px; */}
  @media only screen and(min-width: 1024px) {
    ${'' /* width: 700px; */}
  }
`;


export default function Contact(props) {
  const [showEmail, setShowEmail] = useState(false);
  const [showContactNumber, setShowContactNumber] = useState(false);
  // const [open, setOpen] = React.useState(false);
  // const handleEmailOpen = () => setOpen(true);
  // const handleEmailClose = () => setOpen(false);


  const addEmail = (e) => {
    e.preventDefault();
    setShowEmail(!showEmail)
  }

  const addContactNumber = (e) => {
    e.preventDefault();
    setShowContactNumber(!showContactNumber)
  }
  
  return (
    <>
      <div className="container-fluid contact-container">
        <div className="row contact-pad contact-headline">
        <div className="col-md-8 ">
            <h1 className="row contact-title">Contact Details</h1>
            <p className="row contact-des">Please input requested details below. Click submit once you are done</p>
          </div>
          <div className="col-md-4 pr-0">
            <Link to="/" ><button type="button" className=" contact-submit-top-button float-right">Submit</button> </Link>
          </div>
        </div>
        <div className="row contact-pad">
          <ContactForm showEmail={showEmail} showContactNumber={showContactNumber} addEmail={addEmail} addContactNumber={addContactNumber}/>
        </div>
      </div>
    </>
  );
}
