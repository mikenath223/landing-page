import { createSlice } from '@reduxjs/toolkit';

export const giveTreatmentSlice = createSlice({
  name: 'giveTreatment',
  initialState: {
    treatment: { value: 'treat', check: false }
  },
  reducers: {
    updateTreatment: (state, action) => {
      return {
        treatment: {
          ...state.treatment,
          ...action.payload
        }
      }
    },
  },
});

export const { updateTreatment } = giveTreatmentSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTreatment = state => state.giveTreatment.treatment;

export default giveTreatmentSlice.reducer;
