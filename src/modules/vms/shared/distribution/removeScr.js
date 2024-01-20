import React from 'react'
import Modal from '@mui/material/Modal';


function RemoveScr() {
    const [open4, setOpen4] = React.useState(false);
    const handleOpen4 = () => {
        setOpen4(true);
    };
    const handleClose4 = () => {
        setOpen4(false);
    };

    return (
        <div>
            <img onClick={() => { handleOpen4() }} className='logo' src='/icons/delete-icon.svg' height="18" width="18" alt="delete" title='delete'/>
            <Modal
                open={open4}
                onClose={handleClose4}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className='containerRemove'>
                <div className='warning_tag'>
                    <div className='text-area'>
                        <p className='text-center text-spacing'>Are you sure you want to remove this file</p>
                    </div>
                    <div class="form-row pad">
                        <div class="col-lg-6 pad-top-remove-content">
                            <button onClick={handleClose4} class="form-control field-height btn btn-outline-secondary text-dark modal-button-label" >CANCEL</button>
                        </div>
                        <div class="col-lg-6 pad-top-remove-content">
                            <button class="form-control field-height btn btn-dark text-white modal-button-label">SUBMIT</button>
                        </div>
                    </div>
                </div>
                </div>
            </Modal>
        </div>
    );
}

export default RemoveScr;
