import React from 'react';

import CardAdd from '../CardAdd/CardAdd';

import './Modal.css';

const Modal = ({ id, name, isMainFood, open, closeModal }) => {
  return (
    <div
      className={'modal fade' + (open === true ? ' show' : '')}
      tabIndex='-1'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <CardAdd
            nameFood={name}
            mainFood={isMainFood}
            id={id}
            closeModal={closeModal}
            event='repair'
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
