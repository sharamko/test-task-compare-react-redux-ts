import { createSlice } from '@reduxjs/toolkit';

const compareItemSlice = createSlice({
  name: 'compareItem',
  initialState: {
    ssdHdd: 'option1',
    multiSingle: 'option1',
  },
  reducers: {
    changeSsdHdd(state, action) {
      state.ssdHdd = action.payload;
    },
    changeMultiSingle(state, action) {
      state.multiSingle = action.payload;
    },
  },
});

export default compareItemSlice.reducer;
export const { changeSsdHdd, changeMultiSingle } = compareItemSlice.actions;
