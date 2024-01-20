import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./employAccountModal.css";

import EmployerAccountForm from "./employerAccountForm";
import styled from "styled-components";
import "./employAccountModal.css"
import UploadImage from "./uploadImage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60%",
  height: "auto",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",

  p: 4,
};

const Button = styled.button`
  width: 250px;
  height: 50px;
  left: 1240px;
  top: 933px;

  background: #1f1f1f;
  border-radius: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #ffffff;
`;

export default function EmployAccountModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={handleOpen}>
      <div className=" card-postjob">
        <img src="icons/plus.svg" alt="plus" width="37px" height="37px" />
        <p className="p-create-new">Create New Job</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container-fluid">
            <div className="row cr-emp-heading">
              <div className="Emp-heading">Employer Account</div>
              <div>
                <img src="icons/cross.svg" alt="cross" />
              </div>
            </div>

            <div className="divider"></div>

            <div className="row cr-job-title">
              Please create your employee account first to post a job.
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="upload-logo">Upload Logo*</div>

                <div className="upload-image">
                        <UploadImage/>
                </div>
              </div>

              <div className="col-md-8 create-form-container mt-3 ml-3">
                <EmployerAccountForm />
              </div>

              <div className="divider"></div>

              </div>
              </div>
              <div className="button-container">
                <Button>CREATE</Button>
              </div>
        </Box>
      </Modal>
    </div>
  );
}
