import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Dish, DishTypes } from '../definitions/types';

export const BASE_SLICE_NAME: string = 'dish';

export interface DishState {
  dishes: Dish[];
}

const initialDish: Dish = {
  name: 'Ramen',
  preparationTime: '15',
  type: DishTypes.PIZZA,
  numPizzaSlices: 5,
  diameter: 5.5,
};

const initialState: DishState = {
  dishes: [initialDish],
};

export const dishSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    addDish: (state: DishState, action: PayloadAction<Dish>) => {
      state.dishes.push(action.payload);
    },
  },
});

export const { addDish } = dishSlice.actions;

export const selectDishes = (state: RootState) => state.dish.dishes;

export default dishSlice.reducer;
