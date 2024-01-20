import React from 'react'

const disForm = () => {
  return (
    <div>
      <form className='container-fluid mt-2'>
        <div className="form-row">
          <div class="form-group col-lg-6">
            <label for="inputEmail4" className='font'>Firm Name*</label>
            <input type="email" class="form-control field-height-dis" id="inputEmail4" placeholder="Firm Name" />
          </div>
          <div className="form-group col-lg-6">
            <label for="inputPassword4" className='font'>Network Type*</label>
            <input type="password" className="form-control field-height-dis" id="inputPassword4" placeholder="Last Name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-lg-6">
            <label for="inputEmail4" className='font'>Email*</label>
            <input type="email" className="form-control field-height-dis" id="inputEmail4" placeholder="fullname@gmail.com" />
          </div>

          <div className="col-lg-6 mb-3">
            <label for="validationServerUsername" className='font'>Contact Number*</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <input className="input-group-text region-field-phone" placeholder="+91" />
              </div>
              <input type="text" className="form-control field-height-dis" placeholder="99999 99999" required />
            </div>
          </div>
        </div>


        <div class="form-group">
          <label for="inputAddress2" className='font'>Branch Addres*</label>
          <input type="text" class="form-control field-height-dis" placeholder="#Flat No, Block, Street, Area" />
        </div>

        <div class="form-row">
          <div class="form-group col-lg-3">
            <select id="inputState" class="form-control field-height-dis">
              <option selected>Country</option>
              <option>india</option>
            </select>
          </div>
          <div class="form-group col-lg-3">
            <select id="inputState" class="form-control field-height-dis">
              <option selected>State</option>
              <option>Haryana</option>
            </select>
          </div>
          <div class="form-group col-lg-3">
            <select id="inputState" class="form-control field-height-dis">
              <option selected>City</option>
              <option>Faridabad</option>
            </select>
          </div>
          <div class="form-group col-lg-3">
            <input type="text" class="form-control field-height-dis" id="inputZip" placeholder="12345" />
          </div>
        </div>

      </form>
    </div>
  )
}

export default disForm