import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from './slices/fetchDataSlice';

export default configureStore({
  reducer: {
    // valueInThestore: reducerFromSlice
    queryapi: fetchDataReducer,
  },
});
