import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import compareItemSlice from '../components/compareItem/compareItemSlice';
import inputRangeSlice from '../components/inputRange/inputRangeSlice';

const rootReducer = combineReducers({
  inputRange: inputRangeSlice,
  compareItem: compareItemSlice,
});

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
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
