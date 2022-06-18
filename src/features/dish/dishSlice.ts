import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Dish } from './types';

export const BASE_SLICE_NAME: string = 'dish';

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface DishState {
  value: Dish;
  status: Status.IDLE | Status.LOADING | Status.FAILED;
}

const initialDish = {
  name: 'Ramen',
  preparationTime: '15',
  type: {
    spiciness: 10,
  },
};

const initialState: DishState = {
  value: initialDish,
  status: Status.IDLE,
};

export const dishSlice = createSlice({
  name: BASE_SLICE_NAME,
  initialState,
  reducers: {
    setName: (state: DishState, action: PayloadAction<string>) => {
      state.value.name = action.payload;
    },
  },
});

export const { setName } = dishSlice.actions;

export const selectName = (state: RootState) => state.dish.value;

export default dishSlice.reducer;
