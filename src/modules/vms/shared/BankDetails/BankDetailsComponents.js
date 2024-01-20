import  React,{useState} from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import "./bankdetails.css";


const DetailsDivMl = styled.div`
  // display:flex;
  // justify-content:space-between;
  //
`;

const BankDivMl = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #1f1f1f;
`;
const AccountNo = styled.div`
  position: absolute;
  margin-top: 100px;
  /* width: 170px; */
  height: 24px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1f1f1f;
`;
export default function BankDetailsComponents() {






  return (
    <>
    <DetailsDivMl>
        <form>
          <div className="bottom-line-heading">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="div-branch">
                <p className="branch-deatils">Bank Details </p>
              </div>
              <div className="line-ml"></div>
              <Button
                style={{
                  background: "#FFFFFF",
                  height: "50px",
                  width: "150px",
                  marginTop: "30px",
                  border: "2px solid #F24F17",
                  boxSizing: "border-box",
                  borderRadius: "5px",
                  color: "#F24F17",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
                variant="outlined"
                size="medium"
              >
                Submit
              </Button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="form-left-ml">
              <div className="input-div-ml">
                <div
                  style={{ textAlign: "left" }}
                  className="option-name-email-ml"
                >
                  <p className="bank-details-input-ml">Account Number*</p>
                  <input
                    className="input-account-ml"
                    type="text"
                    name="name"
                    placeholder="1234567890"
                  />
                </div>
              </div>
              <div className="input-div">
                <div
                  style={{ textAlign: "left" }}
                  className="option-name-email-ml"
                >
                  <p className="bank-details-input-ml">IFSC Code*</p>
                  <input className="input-account-ml" type="text" name="name" />
                </div>
              </div>

              <div className="input-div">
                <div
                  style={{ textAlign: "left" }}
                  className="option-name-email-ml"
                >
                  <p className="bank-details-input-ml">
                    Account Holder’s Name*
                  </p>
                  <input className="input-account-ml" type="text" name="name" />
                </div>
              </div>

              <div className="input-div">
                <div
                  style={{ textAlign: "left" }}
                  className="option-name-email-ml"
                >
                  <p className="bank-details-input-ml">Bank Name*</p>
                  <input className="input-account-ml" type="text" name="name" />
                </div>
              </div>

              <div className="input-div">
                <div
                  style={{ textAlign: "left" }}
                  className="option-name-email-ml"
                >
                  <p className="bank-details-input-ml">Branch Name*</p>
                  <input className="input-account-ml" type="text" name="name" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </DetailsDivMl>
    </>
  );
}