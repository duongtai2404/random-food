import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addFood, updateFood } from '../../redux/slices/FoodSlice';

import './CardAdd.css';

const CardAdd = ({ id, nameFood, mainFood, event, closeModal }) => {
  const dispatch = useDispatch();

  const transformNameFood = nameFood ? nameFood : '';
  const transformMainFood = mainFood === true ? 'mainFood' : 'extraFood';

  const [name, changeName] = useState(transformNameFood);
  const [isMainFood, changeIsMainFood] = useState(transformMainFood);

  const close = () => {
    closeModal(false);
    changeName(transformNameFood);
    changeIsMainFood(transformMainFood);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const transformIsMainFood = isMainFood === 'mainFood' ? true : false;
    if (event === 'add') {
      dispatch(addFood({ name, isMainFood: transformIsMainFood }));
      changeName('');
    }
    if (event === 'repair' && name !== nameFood) {
      dispatch(updateFood({ _id: id, name, isMainFood: transformIsMainFood }));
      closeModal(false);
    }
  };
  return (
    <div className='card-add-food'>
      <div className='card-header-add'>Thêm món ăn</div>
      <div className='card-body-add'>
        <form onSubmit={handleSubmitForm}>
          <div className='mb-3'>
            <div
              className={
                'form-floating mb-2' + (name.length === 0 ? ' form-error' : '')
              }
            >
              <input
                type='text'
                className='form-control input-name-food ps-0'
                placeholder='Tên món ăn'
                autoComplete='false'
                autoFocus
                value={name}
                onChange={e => changeName(e.target.value)}
              />
              <label className='ps-0'>Tên món ăn</label>
            </div>
            <div
              className={
                'sub-input clearfix' + (name.length === 0 ? ' error-null' : '')
              }
            >
              {name.length === 0 ? (
                <div className='message-error float-start'>Nhập tên món ăn</div>
              ) : (
                <React.Fragment />
              )}
              <div className='float-end'>{name.length}</div>
            </div>
          </div>
          <div className='mb-4 ps-2'>
            <div className='form-check mb-3'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                value='mainFood'
                onChange={e => changeIsMainFood(e.target.value)}
                checked={isMainFood === 'mainFood'}
              />
              <label className='form-check-label'>Món chính</label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                value='extraFood'
                onChange={e => changeIsMainFood(e.target.value)}
                checked={isMainFood === 'extraFood'}
              />
              <label className='form-check-label'>Món phụ</label>
            </div>
          </div>
          <button
            type='submit'
            className='btn btn-success'
            disabled={name.length === 0 || name === nameFood}
          >
            {event === 'add' ? 'Thêm' : 'Cập nhật'}
          </button>
          {event === 'repair' ? (
            <button
              type='button'
              className='btn btn-secondary ms-3'
              onClick={close}
            >
              Đóng
            </button>
          ) : (
            <React.Fragment />
          )}
        </form>
      </div>
    </div>
  );
};

export default CardAdd;
