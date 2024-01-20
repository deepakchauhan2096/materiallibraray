import React from 'react'
import Modal from '@mui/material/Modal';
import ModalScreen3 from './modalScreen3';



function NestedModal3(props)
{
  const {handleClose1} = props;
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div>
      <button onClick={() => { handleOpen3()}} type="button" class="btn btn-dark btn-block modal_upload">UPLOAD FILE</button>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      > 
      <div className='container-modal'>
          <ModalScreen3 
            onClosehandle={handleClose3} 
            handleClose1={handleClose1}
          />
      </div>
      </Modal>
      </div>
  );
}
        

export default NestedModal3