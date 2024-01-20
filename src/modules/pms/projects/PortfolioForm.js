import React from 'react'


const ProjectForm = () => {
  return (
    <div>

      <div className='row'>
        <div className='col  addproject-upload-area padding-left-right-zero'>
          <div thumbnail>Portfolio Thumbnail</div>
          <ThumbNailUpload />
          <div className='idealSize'>Ideal Size: 120 x 654</div>
        </div>
        <div className='col  addproject_form_area padding-left-right-zero'>
          <div className="form-row">
            <div class="form-group col-lg-12">
              <label className='addproject-label-name'>Created By</label>
              <input type="text" class="form-control addproject-field-height" placeholder="Ex. Portfolio" />
            </div>
          </div>

          <div className="form-row">
            <div class="form-group col-lg-12">
              <label className='addproject-label-name'>Portfolio Heading</label>
              <input type="text" class="form-control addproject-field-height" placeholder="Interior Design Poertfolio" />
            </div>
          </div>


          <div class="form-group addproject-label-name-margin-top">
            <label for="inputAddress2" className='addproject-label-name'>Brief Description<span className='optional_label'> Optional</span></label>
            <input type="text" class="form-control brief-discription-field-height" placeholder="#Flat No, Block, Street, Area" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectForm