import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import BranchDropZone from "./branchDropZone";
import { Divider } from "@mui/material";
import { useState } from "react";

import "./branchUploadModal.css";

const MainBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47.7vw;
  height: auto;
  background-color: white;
  border-radius: 4px;
  box-shadow: 24;
  padding: 40px !important;
  border: 2px solid black;

  @media only screen and (min-width: 769) and (max-width: 1366px) {
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    height: 747px;
    overflow: scroll;
  }
`;

export default function BranchUploadModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isFileUploaded, setIsFileUpload] = useState(true);
  const onUpload = () => setIsFileUpload(false);

  return (
    <div>
      <Button onClick={handleOpen}>Upload Branch modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MainBox>
          <div className="row  pb-4">
            <img src="/icons/back-icon.png" alt="back" />
          </div>

          <div col-md-12>
            <div className="row b-h-font">Have Many Branches?</div>
            <div className="row branch-p-font ">
              Download our CSV file and input all your branch details in just
              minutes.
            </div>
          </div>

          <div className="col p-0">
            <div className="row pt-3">
              <img src="/icons/download-icon.png" height="19" width="20" />{" "}
              <span className="download-csv ">DOWNLOAD CSV FORMAT</span>
            </div>
            <div className="row upload-title pt-4">Upload CSV here</div>
            <div className="row upload-dis">Only .CSV format is allowed</div>
          </div>

          {isFileUploaded ? (
            <div>
              <div className="row pt-1">
                <BranchDropZone />
              </div>

              <div className="row upload-btn-pad ">
                <button
                  onClick={onUpload}
                  className="upload-modal-button w-100 upload-btn-height "
                >
                  UPLOAD FILE
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="row mt-2 d-flex align-items-center">
                <div className="col-md-9 col-9 border upload-btn-height  d-flex justify-content-between align-center">

                    <div className="">FileName.csv</div>

                    <div>
                      <img src="/icons/tick-icon.png" alt="tick" />
                    </div>
             
                </div>

                <div className="col-md-1 col-1 border upload-btn-height m-auto ">
                  <img src="/icons/delete-icon.png" alt="delete" />
                </div>

                <div className="col-md-1 col-1 border upload-btn-height  m-auto ">
                  <img src="/icons/edit-icon.png" alt="edit" />
                </div>
              </div>
            </div>
          )}
          <div className="row upload-btn-pad-row">
            <div className="col-md-6 btn-pad ">
              <button className="b-cancel-button w-100 mr-1 uplaod-btn-height">
                CANCEL
              </button>
            </div>

            <div className="col-md-6 btn-pad">
              <button className="b-save-button w-100  uplaod-btn-height">
                SAVE
              </button>
            </div>
          </div>
        </MainBox>
      </Modal>
    </div>
  );
}
