import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import dishReducer from '../features/dish/redux/dishSlice';

export const store = configureStore({
  reducer: {
    dish: dishReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
