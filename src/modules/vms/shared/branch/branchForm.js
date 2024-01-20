import React from 'react'

const BranchForm = () => {
  return (
    <div>
      <form className='container-fluid mt-2 sm-container-fulid'>
      <div className='col pl-0'>
              <label for="inputEmail4" className='b-font'>Branch Contact Person Name* </label>
        </div>
        <div className="form-row">
          <div class="form-group col-md-6">
            <input title='Foirst Name' type="email" class="form-control b-field-height" id="inputEmail4" placeholder="First Name" />
          </div>
          <div className="form-group col-md-6 ">
            <input type="password" className="form-control b-field-height" id="inputPassword4" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4" className='b-font'>Email ID*</label>
            <input type="email" className="form-control b-field-height" id="inputEmail4" placeholder="fullname@gmail.com" />
          </div>

          <div className="col-md-6 mb-3">
            <label for="validationServerUsername" className='b-font'>Contact Number*</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <input className="input-group-text b-region-field-phone" placeholder="+91" />
              </div>
              <input type="text" className="form-control b-field-height" placeholder="99999 99999" required />

            </div>
          </div>
        </div>


        <div class="form-group">
          <label for="inputAddress2" className='b-font'>Branch Addres*</label>
          <input type="text" class="form-control b-field-height" id="inputAddress2" placeholder="#Flat No, Block, Street, Area" />
        </div>

        <div class="form-row">
          <div class="form-group col-md-3">
            <select id="inputState" class="form-control b-field-height">
              <option selected>Country</option>
              <option>india</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <select id="inputState" class="form-control b-field-height">
              <option selected>State</option>
              <option>Haryana</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <select id="inputState" class="form-control b-field-height">
              <option selected>City</option>
              <option>Faridabad</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <input type="text" class="form-control b-field-height" id="inputZip" placeholder="12345" />
          </div>
        </div>

      </form>
    </div>
  )
}

export default BranchForm