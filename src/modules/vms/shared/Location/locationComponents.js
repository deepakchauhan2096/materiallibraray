import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "material-ui/Divider";
import "./location.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LocationComponents() {
  return (
    <Box sx={{ flexGrow: 1, padding: "0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            <form>
              <div className="bottom-line-heading">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="div-branch">
                    <p className="branch-deatils">Location </p>
                    <p className="sub-branch">
                      Please input requested details below. Click submit once
                      you are done
                    </p>
                  </div>
                  <button className="submit-button">Submit</button>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="form-left">
                  <div className="input-div">
                    <div
                      style={{ textAlign: "left" }}
                      className="option-name-email"
                    >
                      <p className="name-input">Country</p>
                      <select
                        className="input-email"
                        type="text"
                        name="name"
                        placeholder="Last Name"
                      >
                        <option className="option-name-email">India</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-div">
                    <div
                      style={{ textAlign: "left" }}
                      className="option-name-email"
                    >
                      <p className="name-input">State</p>
                      <select
                        className="input-email"
                        type="text"
                        name="name"
                        placeholder="Last Name"
                      >
                        <option value="">Haryana</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-div">
                    <div
                      style={{ textAlign: "left" }}
                      className="option-name-email"
                    >
                      <p className="name-input">Cities</p>
                      <select
                        className="input-email"
                        type="text"
                        name="name"
                        placeholder="Last Name"
                      >
                        <option value="">Faridabad</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-div">
                    <div
                      style={{ textAlign: "left" }}
                      className="option-name-email"
                    >
                      <p className="name-input">Pincode</p>
                      <input
                        className="input-email"
                        type="text"
                        name="name"
                        placeholder="1123456"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div class="v2"></div>
                </div>

                <div style={{ width: "36%" }}>
                  <div className="text-align-left">
                    <p className="branch-deatils">Your Locations</p>
                    <p className="sub-branch padding-top-10">
                      All locations that you have chosen will be shown here.
                      Click cross button to remove a particular location..
                    </p>
                  </div>
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <h2 class="accordion-header" id="headingTwo">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Accordion Item #2
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                        <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                       
                        </h2>
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                        </div>
                        </div>
                      </div>
                  
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
