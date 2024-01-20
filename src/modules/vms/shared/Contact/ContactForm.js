import React, { useState } from "react";
import "./ContactForm.css";
import MuiPhoneNumber from "material-ui-phone-number";
import styled from "styled-components";

const PhnInput = styled(MuiPhoneNumber)`
background: #FFFFFF !important;
    border: 1px solid rgba(31, 31, 31, 0.5) !important;
    box-sizing: border-box !important;
    border-radius: 5px !important;
    width: 100%;
height: 55px;
`;

const ContactForm = ({
  showEmail,
  showContactNumber,
  addEmail,
  addContactNumber,
}) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (phone) => {
    if (phone) {
      setPhone(phone);
    }
  };
  return (
    <>
      <form className="container-fluid sm-container pl-0">
        <div className="col pl-0">
          <label htmlFor="contactName" className="contact-font">
            Contact Name*
          </label>
          <div className="form-row">
            <div class="form-group col-md-4">
              <input
                title="Foirst Name"
                type="email"
                class="form-control "
                id="inputEmail4"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control "
                id="inputPassword4"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="col-md-8 pl-0">
          <div className="d-flex justify-content-between">
            <label htmlFor="contactName" className="contact-font">
              Email ID*
            </label>
            <button className="add-alternate" onClick={addEmail}>
              + ADD ALTERNATE
            </button>
          </div>
          <input
            type="password"
            className="form-control col w-100"
            id="inputPassword4"
            placeholder="fullname@gmail.com"
          />
          {showEmail && (
            <div className="d-flex w-100">
              <span className="w-100">
                <input
                  className="form-control col mw-98 mr-2"
                  type="text"
                  name="name"
                  placeholder="fullname@gmail.com"
                />
              </span>
              <span>
                <button className="verify-button">Verify</button>
              </span>
              <span className="contact-delIcon">
                <img
                  src="/icons/delete-icon.svg"
                  style={{ width: "25px" }}
                  alt="delete-icon"
                />
              </span>
            </div>
          )}
        </div>

        <div className="col-md-8 pl-0">
          <div className="d-flex justify-content-between">
            <label htmlFor="contactName" className="contact-font">
              Contact Number*
            </label>
            <button className="add-alternate" onClick={addContactNumber}>
              + ADD ALTERNATE
            </button>
          </div>
          <div className="form-row row-md-8">
            <div class="form-group col-md">
              <PhnInput
                name="phone"
                data-cy="user-phone"
                defaultCountry={"in"}
                value={phone}
                onChange={handlePhoneChange}
                className="phn-input"
              />
              {showContactNumber && (
                <div className="form-group col-md w-100 d-flex">
                  <span className="col-md">
                    <PhnInput
                      name="phone"
                      data-cy="user-phone"
                      defaultCountry={"in"}
                      value={phone}
                      onChange={handlePhoneChange}
                      className="phn-input"
                    />
                  </span>
                  <span>
                    <button className="verify-button">Verify</button>
                  </span>
                  <span className="contact-delIcon">
                    <img
                      src="/icons/delete-icon.svg"
                      style={{ width: "25px" }}
                      alt="delete-icon"
                    />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col pl-0">
          <label htmlFor="contactName" className="contact-font">
            Address*
          </label>
          <input
            type="text"
            className="form-control col-md-8"
            id="inputPassword4"
            placeholder="99999 99999"
          />

          <div className="form-row mt-2">
            <div class="form-group col-md-4">
              <input
                title="Foirst Name"
                type="email"
                class="form-control "
                id="inputEmail4"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control "
                id="inputPassword4"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-row mt-2">
            <div class="form-group col-md-4">
              <input
                title="Foirst Name"
                type="email"
                class="form-control "
                id="inputEmail4"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-4 ">
              <input
                type="password"
                className="form-control "
                id="inputPassword4"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
