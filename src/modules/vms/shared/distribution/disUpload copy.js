import React from 'react'
import DropZone from './dropZone'

const disUpload = () => {
  return (
    <>
      <div className='container-fluid'>

        <div className="form-row">
          <div class="form-group col-md-9 download-width">
            <p className='font-left field-height button_download_name'><img className='logo' src='/icons/download-icon.png' height="24" width="24" />DOWNLOAD CSV FORMAT</p>
          </div>
          <div className="form-group col-md-3">
            <button type="button" className="form-control field-height howdoes">How Does it Work?</button>
          </div>
          <div className='font-left upload-title'>Upload CSV here</div>
          <div className='font-left upload-child'>Only .CSV format is allowed</div>
          </div>
          <div >
            <DropZone />
          </div>
            <div className='text-left'>
            <input type="submit" class="btn btn-danger btn-lg upload-button left" value="UPLOAD FILE" />
          </div>
        
      </div>
    </>

  )
}

export default disUpload