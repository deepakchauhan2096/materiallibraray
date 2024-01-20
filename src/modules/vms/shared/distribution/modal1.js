import React from 'react'
import Modal from '@mui/material/Modal';
import ModalScreen1 from './modalScreen1';





 function NestedModal1() {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };




  return (
    <div>
      <span onClick={handleOpen1} className='buttons'><img className='logo' src='/icons/plus.svg' /><b className='hidden-text'> ADD NEW</b></span>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >

      <div className='container-modal'>
          <ModalScreen1 
            handleClose1 = {handleClose1}
          />
      </div>

      </Modal>
    </div>
  );
}
  


export default NestedModal1


