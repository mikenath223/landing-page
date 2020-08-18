import { configureStore } from '@reduxjs/toolkit';
import queryApiReducer from './slices/queryApiSlice';
import giveTreatmentReducer from './slices/giveTreatmentSlice';

export default configureStore({
  reducer: {
    // valueInThestore: reducerFromSlice
    queryApi: queryApiReducer,
    giveTreatment: giveTreatmentReducer,
  },
});
