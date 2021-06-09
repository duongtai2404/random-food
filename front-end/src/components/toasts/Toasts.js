import React from 'react';

import './Toasts.css';

const Toasts = props => {
  const status = props.status;

  return (
    <div className='toast-custom'>
      <div
        className={
          'toast align-items-center border-0 show alert-success' +
          (status === 'fail' ? ' toast-fail' : ' toast-success')
        }
        role='alert'
        aria-live='assertive'
        aria-atomic='true'
      >
        <div className='d-flex justify-content-center'>
          <div className='toast-body'>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Toasts;
