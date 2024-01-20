import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

import "./branchEditmodal.css";

const MainBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:47.7vw;
  height: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 24;
  padding:20px;


  @media only screen and (min-width:769) and (max-width: 1366px){
    padding:10px;
  }

  @media only screen and (max-width: 768px){
    padding:20px;
    width:90%;
    height:747px;
    overflow:scroll;

    
  }

`;

export default function BranchEditModal(props) {

  const {modalName, heading, haveMany} = props  

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{modalName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainBox>
          <div className="row  branch-edit-pad">
            <div className="col-md-8 col-sm-6  ">
              <div className="row  b-h-font">{heading}</div>

              <div className="row branch-p-font  ">
                Please input all required details below.
              </div>
            </div>

            <div className="col-md-4 col-sm-6 pr-4">
              <div className="row  b-h-font">{haveMany}</div>
            </div>
          </div>

          <div className="row pl-1 ">
            <form className="container-fluid mt-3 sm-container-fulid">
              <div className="row pl-3 ">
                <label for="inputEmail4" className="b-font  ">
                Branch Contact Person Name*
                </label>
              </div>
              <div className="form-row  ">
                <div class="form-group col-md-6  ">
                  <input
                    type="text"
                    class="form-control b-field-height"
                    id="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6 ">
                  <input
                    type="password"
                    className="form-control b-field-height"
                    id="inputPassword4"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12 ">
                  <label for="inputEmail4" className="b-font">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    className="form-control b-field-height"
                    id="inputEmail4"
                    placeholder="fullname@gmail.com"
                  />
                </div>

                <div className="col-md-12 mb-3 ">
                  <label for="validationServerUsername" className="b-font">
                    Contact Number*
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <input
                        className="input-group-text b-region-field-phone"
                        placeholder="+91"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control b-field-height"
                      placeholder="99999 99999"
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="form-group ">
                <label for="inputAddress2" className="b-font">
                  Branch Addres*
                </label>
                <input
                  type="text"
                  class="form-control b-field-height"
                  id="inputAddress2"
                  placeholder="#Flat No, Block, Street, Area"
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <select id="inputState" class="form-control b-field-height">
                    <option selected>Country</option>
                    <option>india</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <select id="inputState" class="form-control b-field-height">
                    <option selected>State</option>
                    <option>Haryana</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <select id="inputState" class="form-control b-field-height">
                    <option selected>City</option>
                    <option>Faridabad</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control b-field-height "
                    id="inputZip"
                    placeholder="12345"
                  />
                </div>

                <div class="form-group col-md-6">
                    <button className="w-100 b-cancel-button">CANCEL</button>
              </div>

              <div class="form-group col-md-6">
                    <button className="w-100 b-save-button">SAVE</button>
              </div>




              </div>
            </form>
          </div>
        </MainBox>
      </Modal>
    </div>
  );
}
