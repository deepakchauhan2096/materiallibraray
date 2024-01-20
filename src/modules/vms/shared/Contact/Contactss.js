import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "material-ui/Divider";
import "./Contact.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Contact() {
  return (
    <Box sx={{ flexGrow: 1, width: "1367px", height: "856px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            {" "}
            <div className="Contact-div">
              <div className="divContact-branch">
                <p className="Contact-details">Contact</p>
                <p className="sub-Contact">
                  Please input requested details below. Click submit once you
                  are done
                </p>
              </div>
              <div>
                <button className="ContactSubmit-button">Submit</button>
              </div>
            </div>
            <Divider />
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div className="input-div">
                  <form style={{ textAlign: "left" }}>
                    <p className="contactName-input">Contact Name*</p>
                    <input
                      className="input-name"
                      type="text"
                      name="name"
                      placeholder="First Name"
                    />
                    <input
                      className="input-name"
                      type="text"
                      name="name"
                      placeholder="Last Name"
                    />
                  </form>
                </div>
                <div className="input-div">
                  <form style={{ textAlign: "left" }}>
                    <div className="fields-email">
                      <p className="contactName-input">Email ID *</p>
                      <p className="add-alternate">+ ADD ALTERNATE</p>
                    </div>
                    <div className="email-div">
                      <input
                        className="input-email"
                        type="text"
                        name="name"
                        placeholder="abc@example.com"
                      />
                      <div className="email-secdiv">
                        <span>
                          <input
                            className="input-secemail"
                            type="text"
                            name="name"
                            placeholder="abc@example.com"
                          />
                        </span>
                        <span>
                          <button className="verify-button">Verify</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="input-div">
                  <form style={{ textAlign: "left" }}>
                    <div className="fields-email">
                      <p className="contactName-input">Contact Number *</p>
                      <p className="add-alternate">+ ADD ALTERNATE</p>
                    </div>
                    <div>
                      <input
                        className="input-region"
                        type="text"
                        name="name"
                        placeholder="+91"
                      />
                      <input
                        className="input-fone"
                        type="text"
                        name="name"
                        placeholder="9999999999"
                      />
                    </div>
                    <div>
                      <input
                        className="input-region"
                        type="text"
                        name="name"
                        placeholder="+91"
                      />
                      <input
                        className="input-phone"
                        type="text"
                        name="name"
                        placeholder="9999999999"
                      />
                      <span>
                        <button className="verify-button">Verify</button>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="input-div">
                  <form style={{ textAlign: "left" }}>
                    <p className="contactName-input">Address*</p>
                    <input
                      className="input-adress"
                      type="text"
                      name="name"
                      placeholder="#Flat No, Block, Street, Area "
                    />
                  </form>
                  <div style={{ marginTop: "12px" }}>
                    <form style={{ textAlign: "left" }}>
                      <select
                        className="input-name"
                        name="name"
                        placeholder="First Name"
                      >
                        {" "}
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                      &nbsp;&nbsp;
                      <select
                        className="input-name"
                        name="name"
                        placeholder="First Name"
                      >
                        {" "}
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                    </form>
                  </div>
                  <div style={{ marginTop: "12px" }}>
                    <form style={{ textAlign: "left" }}>
                      <select
                        className="input-name"
                        name="name"
                        placeholder="First Name"
                      >
                        {" "}
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                      </select>
                      &nbsp;&nbsp;
                      <input
                        className="input-name"
                        type="text"
                        name="name"
                        placeholder="Pincode"
                      />
                    </form>
                  </div>
                </div>
              </div>
              {/* second part */}
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
