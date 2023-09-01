import { createSlice } from "@reduxjs/toolkit"


const initialState = {
login: { email:"", password:"" }, 
signup: { email:"", password:"" }
}

const formSlice = createSlice({
  name: "form", 
  initialState, 
  reducers: {
    updateLoginField: (state, action) => {
  state.login[action.payload.field] = action.payload.value;
}, 
   updateSignupField: (state, action) => {
  state.signup[action.payload.field] = action.payload.value;
}, 
    resetForm: (state, action) => {
  state[action.payload] = {email:"", password:""}
}
}
})

 export const { updateLoginField, updateSignupField, resetForm } = formSlice.actions;
export default formSlice.reducer;