import React from 'react'
import Modal from '@mui/material/Modal';
import "./projectmodel.css"
import ProjectImageUploader from './ProjectImageUploader';


export default function AddProjectImage() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button onClick={() => {handleOpen()}} class="form-control btn btn-dark text-white addproject-field-height-button float-right NextButton">NEXT</button>
            {/* <img  className="card_cross_image" src="/icons/cross.svg" alt="delete_project" /> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
               <div className='container_add_image border border-dark'>
                    <div className='container_add_content_top'>
                        <div className='row  addproject_heading'>
                            <div className='col padding-left-right-zero add-project-title'>Add Project</div>
                            <div className='col padding-left-right-zero'>
                                <img onClick={handleClose} className="card_add float-right padding-left-right-zero" src="/icons/cross_add.svg" alt="cross_add" />
                            </div>
                        </div>
                    </div>
                    <div className='top-bottom-line'></div>
                    <div className='container_add_content_middle'>
                        <div className='row'>
                            <div className='addproject_navigation'>
                                <p className='number-box'><span className='circle-around-number circle-around-number_one_padding circle-active'>1</span><span className="circle-name circle-active">Basic Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_two_padding'>2</span><span className="circle-name">Image Details</span></p>
                                <p className='number-box'><span className='circle-around-number circle-around-number_three_padding'>3</span><span className="circle-name">Videos Details</span></p>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-12 addproject-upload-image-area padding-left-right-zero'>
                                <div className='thumbnail'>Upload Thumbnail</div>
                                <ProjectImageUploader />
                                <div className='idealSize'>Ideal Size: 120 x 654</div>
                        </div>
                        </div>
                    </div>
                    <div className='top-bottom-line'></div>
                    <div className='container_add_content_bottom'>
                        <div className='row'>
                            <div class="col-12 pr-0">
                                <button class="form-control btn btn-dark text-white addproject-field-height-button float-right">NEXT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

