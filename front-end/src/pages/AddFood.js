import React, { useState } from 'react';

import './AddFood.css';

const AddFoodPage = () => {
  const [title, changeTitle] = useState('');
  const [isMainFood, changeIsMainFood] = useState('mainFood');
  const handle = e => {
    changeIsMainFood(e.target.value);
  };

  const addFood = e => {
    e.preventDefault();
    console.log(title, isMainFood);
    changeTitle('');
  };
  return (
    <div className='row d-flex justify-content-center text-align-center'>
      <div className='col-md-8 col-8'>
        <div className='card-add-food'>
          <div className='card-header-add'>Thêm món ăn</div>
          <div className='card-body-add'>
            <form onSubmit={addFood}>
              <div className='mb-3'>
                <div
                  className={
                    'form-floating mb-2' +
                    (title.length === 0 ? ' form-error' : '')
                  }
                >
                  <input
                    type='text'
                    className='form-control input-name-food ps-0'
                    placeholder='Tên món ăn'
                    autoComplete='false'
                    autoFocus
                    value={title}
                    onChange={e => changeTitle(e.target.value)}
                  />
                  <label className='ps-0'>Tên món ăn</label>
                </div>
                <div
                  className={
                    'sub-input clearfix' +
                    (title.length === 0 ? ' error-null' : '')
                  }
                >
                  {title.length === 0 ? (
                    <div className='message-error float-start'>
                      Nhập tên món ăn
                    </div>
                  ) : (
                    <React.Fragment></React.Fragment>
                  )}
                  <div className='float-end'>{title.length}</div>
                </div>
              </div>
              <div className='mb-4 ps-2'>
                <div class='form-check mb-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    value='mainFood'
                    onChange={handle}
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
                    onChange={handle}
                    checked={isMainFood === 'extraFood'}
                  />
                  <label className='form-check-label'>Món phụ</label>
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-success'
                disabled={title.length === 0}
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodPage;
