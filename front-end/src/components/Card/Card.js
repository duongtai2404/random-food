import React from 'react';

import './Card.css';

const Card = ({ title, isMainFood, isGetFood }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title mb-3'>{title}</h5>
        <p className='card-text'>{isMainFood ? 'Món chính' : 'Món phụ'}</p>
        {isGetFood ? (
          <React.Fragment />
        ) : (
          <React.Fragment>
            <button className='btn btn-primary me-2 btn-card'>Sửa</button>
            <button className='btn btn-secondary btn-card'>Xóa</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Card;
