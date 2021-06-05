import React, { useState } from 'react';

import './GetFood.css';

import Card from '../components/Card/Card';

const foods = [
  { _id: 1, title: 'Cà', isMainFood: true },
  { _id: 2, title: 'Cà2', isMainFood: true },
  { _id: 3, title: 'Cà3', isMainFood: false },
  { _id: 4, title: 'Cà4', isMainFood: false },
  { _id: 5, title: 'Cà5', isMainFood: true },
  { _id: 6, title: 'Cà6', isMainFood: false }
];

const GetFoodPage = () => {
  const [numMainFood, changeNumMainFood] = useState(1);
  const [numExtraFood, changeNumExtraFood] = useState(1);
  const [listMainFood, changeListMainFood] = useState([]);
  const [listExtraFood, changeListExtraFood] = useState([]);

  const getFood = () => {
    changeListMainFood(
      foods
        .filter(food => food.isMainFood === true)
        .sort(() => 0.5 - Math.random())
        .slice(0, numMainFood)
    );
    changeListExtraFood(
      foods
        .filter(food => food.isMainFood === false)
        .sort(() => 0.5 - Math.random())
        .slice(0, numExtraFood)
    );
  };

  return (
    <div className='row d-flex justify-content-around '>
      <div className='col-md-5 col-5 card-filter'>
        <div className='header-card-filter'>Lấy danh sách món ăn</div>
        <div className='body-card-filter mb-4'>
          <div className='form-floating mb-2'>
            <input
              type='number'
              className='form-control input-name-food ps-0'
              min='1'
              value={numMainFood}
              onChange={e => changeNumMainFood(e.target.value)}
            />
            <label className='ps-0'>Món ăn chính</label>
          </div>

          <div className='form-floating'>
            <input
              type='number'
              className='form-control input-name-food ps-0'
              onChange={e => changeNumExtraFood(e.target.value)}
              value={numExtraFood}
              min='1'
            />
            <label className='ps-0'>Món ăn phụ</label>
          </div>
        </div>
        <button onClick={getFood} className='btn btn-success'>
          Lấy món ăn
        </button>
      </div>
      <div className='col-md-6 col-6 card-filter card-result'>
        <div className='header-card-filter'>Kết quả</div>
        {listMainFood.length === 0 ? (
          <div className='card-error'>
            <p>Chưa có kết quả.</p>
          </div>
        ) : (
          <div className='row d-flex justify-content-around'>
            {listMainFood.map(food => (
              <div className='col-md-6 col-6 mb-3' key={food._id}>
                <Card
                  title={food.title}
                  isMainFood={food.isMainFood}
                  isGetFood='true'
                />
              </div>
            ))}
            {listExtraFood.map(food => (
              <div className='col-md-6 col-6 mb-3' key={food._id}>
                <Card
                  title={food.title}
                  isMainFood={food.isMainFood}
                  isGetFood='true'
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetFoodPage;
