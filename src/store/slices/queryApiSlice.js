import { createSlice } from '@reduxjs/toolkit';

export const queryApiSlice = createSlice({
  name: 'queryApi',
  initialState: {
    questions: [],
  },
  reducers: {
    loadData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.questions.push(...action.payload);
    },
  },
});

export const { loadData } = queryApiSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectApiData = state => state.queryApi.questions;

export default queryApiSlice.reducer;
