import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './slices/fetchDataSlice';
import giveTreatmentReducer from './slices/giveTreatmentSlice';

export default configureStore({
  reducer: {
    // valueInThestore: reducerFromSlice
    queryapi: fetchDataReducer,
    giveTreatment: giveTreatmentReducer,
  },
});
