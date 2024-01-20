import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "material-ui/Divider";
import Typography from "@mui/material/Typography";
import BeforeCVSUpload from "./BeforeCVSUpload";
import "./KycDetails.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const KycBox = styled(Box)`
  ${'' /* margin-top: 39px;
  flexgrow: 1;
  width: 100%;
  height: 856px;

  @media only screen and (max-width: 1024px) {
    width: 72%; */}
    
  }
 `;

export default function KycDetails() {
  return (
    <KycBox>
      {/* <GridBox container> */}
        <Item>
          <div className="Kyc-div">
            <div className="divKyc-details">
              <p className="Kyc-details">KYC Details</p>
              <p className="sub-kyc">
                Please input requested details below. Click submit once you are
                done
              </p>
            </div>
            <button className="KycSubmit-button">SUBMIT</button>
          </div>
          <Divider />
          <Divider />
          <div className="kycForm-container">
            <div style={{width: "100%"}}>
              <form style={{ textAlign: "left", marginBottom: "85px" }}>
                {/* <div className="contactInput-div"> */}
                <label htmlFor="kycOrg-name" className="KycInput-div">
                  <h2 className="kyc-input">Organization Name *</h2>
                  <div className="kyc-OrgDiv">
                    <input
                      className="kycinput-field"
                      type="text"
                      name="name"
                      placeholder="Tata Motors"
                    />
                  </div>
                </label>

                <label htmlFor="kyc-certificate" className="KycInput-div">
                  <div className="fields-kyc">
                    <Typography variant="h6" fontWeight={600} textAlign="left">
                      Registration Certificate
                    </Typography>
                    <Typography variant="p">
                      PDF, PNG, JPEG, and JPG are allowed
                    </Typography>
                    <div className="beforeCvsUpload" style={{ width: "820px" }}>
                      <BeforeCVSUpload />
                    </div>
                  </div>
                </label>

                <label htmlFor="kycOrg-type" className="KycInput-div">
                  <p className="kyc-input">Name of Organization *</p>

                  <div className="kycOrgType-input">
                    <select
                      className="selectKycInput-name"
                      name="name"
                      placeholder="organization"
                    >
                      {" "}
                      <option
                        className="contact-orgOption"
                        // style={{ margin: "20px 0px" }}
                        value="volvo"
                      >
                        Manufacturer
                      </option>
                      <div className="mt-20"></div>
                      <option
                        className="kyc-orgOption"
                        // style={{ margin: "20px", width: "200px" }}
                        value="saab"
                      >
                        Vendor
                      </option>
                      <option
                        className="kyc-orgOption"
                        // style={{ margin: "20px" }}
                        value="opel"
                      >
                        Service Provider
                      </option>
                      <option
                        className="kyc-orgOption"
                        // style={{ margin: "20px" }}
                        value="audi"
                      >
                        Supplier
                      </option>
                    </select>
                  </div>
                </label>

                <label htmlFor="kyc-pan" className="KycInput-div">
                  <h2 className="kyc-input">PAN (Permanent Account Number)*</h2>
                  <input className="kycinput-field" type="text" name="name" />
                </label>

                <label htmlFor="kycGst-name" className="KycInput-div">
                  <div className="kyc-gst">
                    <div className="contact-selectDiv">
                      <h2 className="kyc-input">GSTIN Status</h2>
                      <select
                        className="selectInput-name"
                        name="name"
                        placeholder="First Name"
                      >
                        {" "}
                        <option className="c" value="volvo">
                          I have a GSTIN
                        </option>
                        <option className="c" value="saab">
                          I will only sell in GSTIN extempt categories like
                          stationary
                        </option>
                        <option value="opel">
                          I have applied/ will apply for a GSTIN{" "}
                        </option>
                      </select>
                    </div>
                    <div className="contact-selectDiv">
                      <h2 className="kyc-input">GSTIN</h2>
                      <input
                        className="selectInput-name"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>
                </label>

                <label htmlFor="kycRegistration-name" className="KycInput-div">
                  <div className="kyc-gst">
                    <div className="contact-selectDiv">
                      <h2 className="kyc-input">Registeration under MSME *</h2>
                      <select
                        className="selectInput-name"
                        name="name"
                        placeholder="First Name"
                      >
                        {" "}
                        <option value="volvo">Yes</option>
                        <option value="saab">No</option>
                      </select>
                    </div>
                    <div className="contact-selectDiv">
                      <h2 className="kyc-input">MSME Number</h2>
                      <input
                        className="selectInput-name"
                        type="text"
                        name="name"
                      />
                    </div>
                  </div>
                </label>
              </form>
            </div>
          </div>
        </Item>
      {/* </GridBox> */}
    </KycBox>
  );
}
