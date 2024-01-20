import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalScreen2 from './modalScreen2';





function NestedModal2(props) {
  const {handleClose1} = props;
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <p onClick={() => { handleOpen2()}} className='nested1'><span className='hidden_dis_modal'>Have </span>Many branches?</p>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className='container-modal'>
          <ModalScreen2 
            onClosehandle={handleClose2} 
            handleClose1 = {handleClose1}
          />
        </div>
      </Modal>
    </div>
  );
}
        

export default NestedModal2