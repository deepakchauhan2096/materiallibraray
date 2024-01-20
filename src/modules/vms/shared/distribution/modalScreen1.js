import React from 'react'
import NestedModal2 from './modal2'

const modalScreen1 = (props) => {
    const { handleClose1 } = props
    return (
        <div className='pad-modal-content'>
            <div className="row">
                <div className="col-6">
                    <div className="dis-title-modal">Add New Network</div>
                    <div className="dis-dis-modal pt-2 hidden_dis_modal">Please input all required details below</div>
                </div>
                <div className="col-6">
                    <div className="dis-title-modal ml-orange float-right">{<NestedModal2 />}</div>
                </div>
            </div>

            <form className='row'>
                <div className='col-12 scroll_modal'>
                    <div className="row pad-top-modal-content">
                        <div class="col-md-12">
                            <label className='modal-label'>First Name*</label>
                            <input type="email" class="form-control field-height-dis" placeholder="Firm Name" />
                        </div>
                    </div>

                    <div className="row pad-top-modal-content">
                        <div className="col-md-12">
                            <label className='modal-label'>Network Type*</label>
                            <input type="password" className="form-control field-height-dis" placeholder="Last Name" />
                        </div>
                    </div>

                    <div className="row pad-top-modal-content">
                        <div className="col-md-12">
                            <label className='modal-label'>Email ID*</label>
                            <input type="email" className="form-control field-height-dis" placeholder="Firm Name" />
                        </div>
                    </div>

                    <div className="row pad-top-modal-content">
                        <div className="col-md-12">
                            <label className='modal-label'>Contact Number*</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <input className="input-group-text region-field-phone" placeholder="+91" />
                                </div>
                                <input type="number" className="form-control field-height-dis" placeholder="Contact" />
                            </div>
                        </div>
                    </div>

                    <div className="row pad-top-modal-content">
                        <div class="col-md-12">
                            <label className='modal-label'>Branch Address*</label>
                            <input type="text" class="form-control field-height-dis" placeholder="Firm Name" />
                        </div>
                    </div>
                    <div class="row pad-top-modal-content">
                        <div class="form-group col-lg-3">
                            <select class="form-control field-height-dis">
                                <option selected>Country</option>
                                <option>india</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-3">
                            <select class="form-control field-height-dis">
                                <option selected>State</option>
                                <option>Haryana</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-3">
                            <select class="form-control field-height-dis">
                                <option selected>City</option>
                                <option>Faridabad</option>
                            </select>
                        </div>
                        <div class="form-group col-lg-3">
                            <input type="number" class="form-control field-height-dis" placeholder="12345" />
                        </div>
                    </div>
                </div>

                <div className='col-12'>
                    <div class="form-row">
                        <div class="col-lg-6 pad-top-modal-content">
                            <button onClick={handleClose1} class="form-control field-height-dis btn btn-outline-secondary text-dark modal-button-label" >CANCEL</button>
                        </div>
                        <div class="col-lg-6 pad-top-modal-content">
                            <button class="form-control field-height-dis btn btn-dark text-white modal-button-label">SUBMIT</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default modalScreen1

