import React from 'react'

const BranchForm = () => {
  return (
    <div>
      <form className='container-fluid mt-2 sm-container-fulid' style={{border:"1px dotted",borderRadius:"10px"}}>
      <div className='col pl-0' style={{display:"flex",justifyContent:"space-between"}}>
              <label for="inputEmail4" className='b-font'>ADD COURSES & CERTIFICATION</label>
              <span style={{color:"#000000",fontWeight:"600"}}>X</span>
        </div>
        <div className="form-row">
          <div class="form-group col-lg-12">
          <div style={{fontSize:"18px",fontWeight:"500"}}>Training Program*</div>
            <input title='Foirst Name' type="email" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: UI/UX Designer" />
          </div>
          <div className="form-group col-lg-12">
          <div style={{fontSize:"18px",fontWeight:"500"}}>Organization*</div>
            <input type="text" className="form-control b-field-height" id="inputPassword4" placeholder="Last Name" />
            <div style={{display:"flex", alignItems:"center"}}>
         <input type="checkbox" style={{margin:"0 10px"}}/>
         <span>Online</span>
         </div>
            {/* <select class="form-control b-field-height" id="inputEmail4">
                <option></option>
                <option>First</option>
                <option>First</option>
            </select> */}
          </div>
          {/* <div class="form-group col-lg-12">
          <div style={{fontSize:"18px",fontWeight:"500"}}>Company*</div>
            <input title='Foirst Name' type="email" class="form-control b-field-height" id="inputEmail4" placeholder="Ex: Material Library" />
          </div> */}
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4" className='b-font'>Start Date*</label>
            <input type="date" className="form-control b-field-height" id="inputEmail4" placeholder="fullname@gmail.com" />
          </div>

          <div className="col-md-6 mb-3">
            <label for="validationServerUsername" className='b-font'>End Date*</label>
            <div className="input-group">
              {/* <div>
                <input className="input-group-text b-region-field-phone" placeholder="+91" />
              </div> */}
              <input type="date" className="form-control b-field-height" placeholder="99999 99999" required />

            </div>
          </div>
         
        </div>
        <div class="form-group">
          <label for="inputAddress2" className='b-font'>Association & Alliance</label>
          <input type="text" class="form-control b-field-height" id="inputAddress2" placeholder="" />
        </div>

        <div class="form-group">
          <label for="inputAddress2" className='b-font'>Brief Description*</label>
          <input type="text" class="form-control b-field-height" id="inputAddress2" placeholder="" />
        </div>

        {/* <div class="form-row">
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
        </div> */}
<button style={{backgroundColor:"#000000", color:"#ffffff",border:"none",borderRadius:"5px",width:"250px",height:"50px",margin:"30px 0 20px 0"}}>Add</button>
      </form>
    </div>
  )
}

export default BranchForm