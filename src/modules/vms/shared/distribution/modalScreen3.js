import React from 'react'

const modalScreen3 = (props) => {

  const { onClosehandle, handleClose1 } = props;
  return (
    <div className='pad-modal-content'>
      <div className="row">
        <div className="col-md-12">
          <div className="modal-deatils1"><img onClick={onClosehandle} className='logo' src='/icons/back-icon.svg' height="18" width="18" /></div>
        </div>
      </div>

      <div className="row model2-pad">
        <div className="col-md-12">
          <div className="dis-title-modal">Have Many Networks?</div>
        </div>

        <div className="col-md-12 hidden_dis_modal">
          <p className="dis-dis-modal modal-branch1 ">Download our CSV file and input all your network details in just minutes.</p>
        </div>
      </div>


      <div className="row">
        <div className="col-md-12">
          <div className='field-height button_download_name ml-orange'><img className='logo' src='/icons/download-icon.png' height="24" width="24" /> DOWNLOAD CSV FORMAT</div>
        </div>

        <div className="col-md-12">
          <div className="modal-deatils1 py-1 dis-dis">Upload CSV here</div>
        </div>

        <div className="col-md-12">
          <div className="modal-branch1 ">Only .CSV format is allowed</div>
        </div>
      </div>


      <div className='form-row modal3-bottom-margin'>

        <div className="col input-group pt-1">
          <input type="text" className="form-group form-control field-height-dis border-dark" placeholder="filename.csv" required />
          <div className="input-group-prepend">
            <button className="delete_modal3"><img className='logo' src='/icons/delete-icon.svg' height="18" width="18" /></button>
          </div>
          <div className="input-group-prepend">
            <button className="edit_modal3"><img className='logo' src='/icons/edit-icon.svg' height="18" width="18" /></button>
          </div>
        </div>

      </div>

      

      {/* <div className='modal-orline'></div> */}
      <div className="row"><div className="modal-orline3"></div></div>
      <div class="form-row">
        <div class="col-lg-6 pad-top-modal-content">
          <button onClick={onClosehandle} class="form-control field-height-dis btn btn-outline-secondary text-dark modal-button-label" >CANCEL</button>
        </div>
        <div class="col-lg-6 pad-top-modal-content">
          <button class="form-control field-height-dis btn btn-dark text-white modal-button-label">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default modalScreen3

