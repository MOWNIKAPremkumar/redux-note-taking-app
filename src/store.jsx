import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './slices/noteSlice';  

const store = configureStore({
  reducer: {
    notes: notesReducer,  
  },
});

export default store;
