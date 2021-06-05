import { createSlice } from '@reduxjs/toolkit';

const foods = [
  { _id: 1, title: 'Cà', isMainFood: true },
  { _id: 2, title: 'Cà2', isMainFood: true },
  { _id: 3, title: 'Cà3', isMainFood: false },
  { _id: 4, title: 'Cà4', isMainFood: false },
  { _id: 5, title: 'Cà5', isMainFood: true },
  { _id: 6, title: 'Cà6', isMainFood: false }
];

export const foodSlice = createSlice({
  name: 'foods',
  initialState: foods,
  reducers: {}
});

export const {} = foodSlice.actions;

export default foodSlice.reducer;
