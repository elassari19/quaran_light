import { createSlice } from "@reduxjs/toolkit";

export const initialRootState = {
  activeStep: 0,
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  birthdate: "",
  gender: "male"
}

export const rootSlice = createSlice({
  name: "root",
  initialState: initialRootState,
  reducers: {
    rootHandler: (state: any, { payload }) => {
      return { ...state, ...payload };
    },
  }
})

// Action creators are generated for each case reducer function
export const { rootHandler } = rootSlice.actions;

export default rootSlice.reducer;
