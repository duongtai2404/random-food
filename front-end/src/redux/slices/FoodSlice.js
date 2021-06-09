import { createSlice } from '@reduxjs/toolkit';

//statusAddFood : default | success | fail

const foods = {
  food: [],
  errorAddFood: false,
  statusAddFood: 'default',
  statusUpdateFood: 'default'
};

export const foodSlice = createSlice({
  name: 'foods',
  initialState: foods,
  reducers: {
    getAllFoods: () => {},
    getAllFoodsSuccess: (state, action) => {
      state.food = action.payload;
    },
    getAllFoodsFailure: () => {},
    addFood: () => {},
    addFoodSuccess: (state, action) => {
      state.food.push(action.payload);
      state.statusAddFood = 'success';
    },
    addFoodFailure: (state, action) => {
      state.errorAddFood = true;
      state.statusAddFood = 'fail';
    },
    changeStatusAddFoodToDefault: (state, action) => {
      state.statusAddFood = 'default';
    },
    deleteFood: () => {},
    deleteSuccess: (state, action) => {
      debugger;
      const index = state.food.findIndex(
        element => element._id === action.payload
      );
      state.food.splice(index, 1);
    },
    deleteFail: () => {},
    updateFood: () => {},
    updateSuccess: (state, action) => {
      debugger;
      const { _id, name, isMainFood } = action.payload;
      const food = state.food.find(element => element._id === _id);
      food.name = name;
      food.isMainFood = isMainFood;
      state.statusUpdateFood = 'success';
    },
    updateFail: (state, action) => {
      state.statusUpdateFood = 'fail';
    }
  }
});

export const {
  getAllFoods,
  addFood,
  changeStatusAddFoodToDefault,
  deleteFood,
  updateFood
} = foodSlice.actions;

export const selectAllFood = state => state.foods.food;

export default foodSlice.reducer;
