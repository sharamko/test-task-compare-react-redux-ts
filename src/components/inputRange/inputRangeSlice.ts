import { createSlice } from '@reduxjs/toolkit';

const inputRangeSlice = createSlice({
  name: 'inputsRange',
  initialState: {
    storage: 100,
    transfer: 100,
  },
  reducers: {
    changeStorageValue(state, action) {
      state.storage = action.payload;
    },
    changeTransferValue(state, action) {
      state.transfer = action.payload;
    },
  },
});

export default inputRangeSlice.reducer;
export const { changeStorageValue, changeTransferValue } =
  inputRangeSlice.actions;
