import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card/Card';

const foods = [
  { title: 'Cà tím', isMainFood: true },
  { title: 'Cà pháo', isMainFood: false },
  { title: 'Cà chua', isMainFood: true },
  { title: 'Cà pháo', isMainFood: false },
  { title: 'Cà chua', isMainFood: true }
];

const Foods = () => {
  return (
    <React.Fragment>
      {foods.length === 0 ? (
        <div className='row d-flex justify-content-center text-align-center'>
          <div className='col-md-8 col-8'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Chưa có món ăn nào để chọn !!!</h5>
                <p className='card-text'>Hãy tạo cho mình món ăn mới</p>
                <Link to='/new' className='btn btn-primary'>
                  Thêm món ăn
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='row'>
          {foods.map(food => (
            <div className='col-md-4 col-12 mb-4'>
              <Card title={food.title} isMainFood={food.isMainFood} />
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Foods;
