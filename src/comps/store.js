import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice"; 
import formReducer from "./features/formSlice"
  
const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
  },
});

export default store;

