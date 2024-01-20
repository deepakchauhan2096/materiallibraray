import React from 'react'
import DropZone2 from './dropZone2'
import NestedModal3 from './modal3';

const modalScreen2 = (props) => {

  const { onClosehandle, handleClose1 } = props;
  return (
    <div className='pad-modal-content'>
      {/* <div className="form-row"> */}

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
          <p className="dis-dis-modal">Download our CSV file and input all your network details in just minutes.</p>
        </div>
      </div>


      <div className="row">
        <div className="col-md-12">
          <div className='field-height button_download_name ml-orange'><img className='logo' src='/icons/download-icon.png' height="24" width="24" /> DOWNLOAD CSV FORMAT</div>
        </div>

        <div className="col-md-12">
          <div className="modal-deatils2 py-1 dis-dis">Upload CSV here</div>
        </div>

        <div className="col-md-12">
          <div className="modal-branch2">Only .CSV format is allowed</div>
        </div>
      </div>


      <div className='form-row pb-5'>
        <div className='col-12'><DropZone2 /></div>
      </div>

      <div className='form-row upload-top-space-modal'>
        <div className='col-12'>{<NestedModal3 handleClose1={handleClose1} />}</div>
      </div>

      {/* <div className='modal-orline'></div> */}
      <div className="row"><div className="modal-orline2"></div></div>

      <div class="form-row">
        <div class="col-lg-6 pad-top-modal-content">
          <button onClick={onClosehandle} class="form-control field-height-dis btn btn-outline-secondary text-dark modal-button-label" >CANCEL</button>
        </div>
        <div class="col-lg-6 pad-top-modal-content">
          <button class="form-control field-height-dis btn btn-dark text-white modal-button-label">SUBMIT</button>
        </div>
      </div>





      {/* <div className="container-fluid display-flex">
            <div style={{ display: "flex", justifyContent: "space-between" }} className='row position-relative' >
              <div className="modal-div-branch-dis">
                <p className="modal-deatils1" onClick={onClosehandle} ><img className='logo' src='/icons/back-icon.png' height="18" width="18" /></p>
                <div>
                  <p className="modal-deatils1 pt-0">Have many networks?</p>
                </div>
                <p className="modal-branch1">Download our CSV file and input all your network details in just minutes.</p>
              </div>
            </div>
          </div> */}
    </div>
  )
}

export default modalScreen2

