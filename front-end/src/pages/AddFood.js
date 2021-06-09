import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CardAdd from '../components/CardAdd/CardAdd';

//actions
import { changeStatusAddFoodToDefault } from '../redux/slices/FoodSlice';

import Toasts from '../components/toasts/Toasts';

// import './AddFood.css';

const AddFoodPage = () => {
  const dispatch = useDispatch();

  const statusAddFood = useSelector(state => state.foods.statusAddFood);

  useEffect(() => {
    if (statusAddFood !== 'default') {
      const timerErrorAddFood = setTimeout(() => {
        dispatch(changeStatusAddFoodToDefault());
      }, 1000);
      return () => clearTimeout(timerErrorAddFood);
    }
  }, [statusAddFood, dispatch]);

  return (
    <div className='row d-flex justify-content-center text-align-center'>
      <div className='col-md-8 col-8'>
        <CardAdd nameFood='' mainFood={true} event='add' />
      </div>
      {statusAddFood === 'default' ? (
        <React.Fragment />
      ) : statusAddFood === 'success' ? (
        <Toasts status='success'>Thêm thành công</Toasts>
      ) : (
        <Toasts status='fail'>Thêm thất bại</Toasts>
      )}
    </div>
  );
};

export default AddFoodPage;
