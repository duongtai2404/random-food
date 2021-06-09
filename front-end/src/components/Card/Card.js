import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal/Modal';

import { deleteFood } from '../../redux/slices/FoodSlice';
import './Card.css';

const Card = ({ id, name, isMainFood, isGetFood }) => {
  const dispatch = useDispatch();

  const [open, changeOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteFood(id));
  };
  return (
    <React.Fragment>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title mb-3'>{name}</h5>
          <p className='card-text'>{isMainFood ? 'Món chính' : 'Món phụ'}</p>
          {isGetFood ? (
            <React.Fragment />
          ) : (
            <React.Fragment>
              <button
                className='btn btn-primary me-2 btn-card'
                onClick={e => changeOpen(true)}
              >
                Sửa
              </button>
              <button
                className='btn btn-secondary btn-card'
                onClick={handleDelete}
              >
                Xóa
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
      <Modal
        open={open}
        name={name}
        isMainFood={isMainFood}
        id={id}
        closeModal={changeOpen}
      />
    </React.Fragment>
  );
};

export default Card;
