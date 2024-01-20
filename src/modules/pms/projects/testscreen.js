import React from 'react'
import "./projectmodel.css"
import SingleImageUploadComponent from './ProjectBasicUploader';
const Testscreen = () => {
  return (
    <div>
            {/* <img  className="card_cross_image" src="/icons/cross.svg" alt="delete_project" /> */}
            
                <div className='container_add border border-dark'>
                    <div className='container_add_content_top'>
                        <div className='row  addproject_heading'>
                            <div className='col padding-left-right-zero add-project-title'>Add Project</div>
                            <div className='col padding-left-right-zero'>
                                <img className="card_add float-right padding-left-right-zero" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-bottom-line'></div>
                    <div className='container_add_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding'>1</span><span className="circle-name">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_two_padding'>2</span><span className="circle-name">Image Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Videos Details</span></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col  addproject-upload-area padding-left-right-zero'>
                                <div>Upload Thumbnail</div>
                                <SingleImageUploadComponent />
                                <div className='idealSize'>Ideal Size: 120 x 654</div>
                            </div>
                            <div className='col  addproject_form_area padding-left-right-zero'>
                                <div className="form-row">
                                    <div class="form-group col-lg-12">
                                        <label className='addproject-label-name'>Project Title*</label>
                                        <input type="text" class="form-control addproject-field-height" placeholder="Ex. Portfolio" />
                                    </div>
                                </div>


                                <div class="form-row addproject-label-name-margin-top">
                                    <div class="form-group col-lg-12">
                                        <label className='addproject-label-name'>Residential*</label>
                                        <select id="inputState" class="form-control addproject-field-height">
                                            <option selected>Residential</option>
                                            <option>custom</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-row  addproject-label-name-margin-top">
                                    <div class="form-group col-lg-6">
                                        <label className='addproject-label-name'>Start Date*</label>
                                        <input type="date" class="form-control addproject-field-height" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className='addproject-label-name'>End Date*</label>
                                        <input type="date" className="form-control addproject-field-height" />
                                    </div>
                                </div>

                                <div className="form-row  addproject-label-name-margin-top">
                                    <div className="col-lg-12 mb-3">
                                        <label className='addproject-label-name'>Area Covered</label>
                                        <div className="input-group">

                                            <input type="text" className="form-control addproject-field-height" placeholder="2000" required />
                                            <div className="input-group-prepend">
                                                <input type="text" className="addproject_square" placeholder="Sq." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group addproject-label-name-margin-top">
                                    <label for="inputAddress2" className='addproject-label-name'>Brief Description*</label>
                                    <input type="text" class="form-control brief-discription-field-height" placeholder="#Flat No, Block, Street, Area" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div class="col-12 pr-0">
                                <button class="form-control btn btn-dark text-white addproject-field-height-button float-right">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
  )
}

export default Testscreen